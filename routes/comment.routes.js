import express from "express";
import { authmiddleware } from "../middleware/authmiddleware.js";
import CommentController  from "../controller/comment.controller.js";

const commentRouter = express.Router();
const commentController = new CommentController();
console.log("this route", commentController.addComment);

commentRouter.post("/", authmiddleware, commentController.addComment);

// commentRouter.post("/", authmiddleware, (req, res) => {
//     commentController.addComment(req, res);
// });
// other way to bind this instance

export const commentroutes = commentRouter;
