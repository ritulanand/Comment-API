import express from "express";
import { authmiddleware } from "../middleware/authmiddleware.js";
import { commentController } from "../controller/comment.controller.js";

const commentRouter = express.Router();

commentRouter.post("/", authmiddleware, commentController.addComment);

export const commentroutes = commentRouter;