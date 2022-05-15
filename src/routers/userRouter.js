import express from "express";
import { edit, remove, logout, see } from "../controllers/userController";

const userRouter = express.Router();

// userRouter는 url이 /users로 시작하므로 뒤의 /edit을 붙여 /users/edit url이 완성
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/:id", see);

export default userRouter;
