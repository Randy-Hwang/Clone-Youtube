import express from "express";
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoController";

const globalRouter = express.Router();

// "/"페이지를 요구했을 때 trending 실행
globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
