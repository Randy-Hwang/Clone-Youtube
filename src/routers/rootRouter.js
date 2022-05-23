import express from "express";
import { getJoin, login, postJoin } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const rootRouter = express.Router();

// "/"페이지를 요구했을 때 home 실행
rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", search);

export default rootRouter;
