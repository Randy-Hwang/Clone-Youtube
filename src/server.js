// express를 express라는 이름으로 import
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
// express와 관련된 코드는 express application 을 선언한 이후에 적어야 한다.
const app = express();
// application에게 get request에 응답하는 방법 등을 알려줘야 한다.

const logger = morgan("dev");
//middleware를 어떤 url에서나 쓸 수 있도록 하는 함수. 모든 라우트(route)에서 이 middleware 함수를 사용하게 됨
// morgan -> 정보를 조금 더 정교하게 줌.
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`GO to Our Server! -> http://localhost:${PORT}`);

app.listen(PORT, handleListening);
