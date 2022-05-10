// express를 express라는 이름으로 import
import express from "express";
import morgan from "morgan";

const PORT = 4000;

// express와 관련된 코드는 express application 을 선언한 이후에 적어야 합니다.
const app = express();
// application에게 get request에 응답하는 방법 등을 알려줘야 합니다.

const logger = morgan("dev");

const handleHome = (req, res) => {
  return res.send("I Love Express!");
};

//middleware를 어떤 url에서나 쓸 수 있도록 하는 함수. 모든 라우트(route)에서 이 middleware 함수를 사용하게 됨
// morgan -> 정보를 조금 더 정교하게 줌.
app.use(logger);

// app.get("/") -> home router(/)에 요청이 들어왔을 때 어떤 반응을 보여줘야 할지에 대해서.
app.get("/", handleHome);

const handleListening = () =>
  console.log(`GO to Our Server! -> http://localhost:${PORT}`);

app.listen(PORT, handleListening);
