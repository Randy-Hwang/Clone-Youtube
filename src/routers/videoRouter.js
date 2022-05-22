import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

// 앞에 콜론을 붙이는 것은 변수 지정. 변수가 없는 라우터를 맨 위로 보내야 한다.
// :id 가 /upload 보다 위로 올라오면, 주소창에 /upload 라고 쳤을 때
// express는 upload가 라우터가 아닌 변수로 인식하기 때문.
// 따라서 /:id(=upload) 로 가게된다.
// id가 숫자만 인식할 수 있도록 만들면 (\\d+) upload도 인식 가능함
// 우리가 데이터베이스로 사용하는 몽구스는 24개의 16진수로 id값을 만듦
// 따라서 이를 구분해주는 정규식[0-9a-f]{24} 필요

videoRouter.get("/:id([0-9a-f]{24})", watch);
// 아래의 url로 get 요청이 들어온다면 getEdit을, post요청이 들어온다면 postEdit을 불러오기
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
