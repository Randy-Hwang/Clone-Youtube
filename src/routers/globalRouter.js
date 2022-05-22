import express from "express";
import { join, login } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const globalRouter = express.Router();

// "/"페이지를 요구했을 때 home 실행
globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
