import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("connected to DB ✅");
const handleError = (error) => console.log(error);

// on vs once -> on : 여러번 발생시킬 수 있는 이벤트
// once : 한 번만 발생시킬 수 있는 이벤트
db.on("error", handleError);
db.once("open", handleOpen);
