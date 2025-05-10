import express from "express";
import { authmiddlware } from "../middleware/authmiddleware";

 const commentRouter = express.Router();
export const commentroutes = commentRouter.post("/", authmiddlware,);
