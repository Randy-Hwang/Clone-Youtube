// express를 express라는 이름으로 import
import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

// express와 관련된 코드는 express application 을 선언한 이후에 적어야 한다.
const app = express();
// application에게 get request에 응답하는 방법 등을 알려줘야 한다.

const logger = morgan("dev");

// 더 쉽게 html 파일을 만들고 임포트 하기 쉬움.
// 뷰 엔진을 pug로 설정하고 pug파일을 만들어두면 됨.
// 적용하는 방법은 app.set("view engine", "pug");
// views라고 적힌 폴더를 디폴트값으로 갖기 때문에 폴더를 만들어주어야 함.
// 다만 npm run dev로 실행하였을 때, 기본 디렉토리는 package.json 파일이 있는 폴더가 기본 디렉토리가 됨
// 기본디렉토리에는 views라는 폴더가 없고, src/views에 있으므로 수정이 필요
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

//middleware를 어떤 url에서나 쓸 수 있도록 하는 함수. 모든 라우트(route)에서 이 middleware 함수를 사용하게 됨
// morgan -> 정보를 조금 더 정교하게 줌.
app.use(logger);

// express가 html의 form 형식을 이해하고 정보를 우리에게 줄 수 있도록 하는 코드
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
    // 세션은 백엔드가 브라우저를 방문할 때 생겨난다.
    // mongostore를 활용하면 백엔드(서버)를 껐다 켜도, 새로고침을 해도 로그아웃되지 않음
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/wetube" }),
  })
);

app.use(localsMiddleware);

app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
