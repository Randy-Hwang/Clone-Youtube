import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const globalRouter = express.Router();

// "/"페이지를 요구했을 때 trending 실행
globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
