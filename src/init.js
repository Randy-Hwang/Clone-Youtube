// server.js는 서버에 필요한 것만 관여,
// 다른 모든 import해야할 것들은 init.js에 import
import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`GO to Our Server! -> http://localhost:${PORT}`);

app.listen(PORT, handleListening);
