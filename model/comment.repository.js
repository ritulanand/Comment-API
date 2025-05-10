import mongoose from "mongoose";
import commentSchema from "../schema/comment.schema.js";

const comment = mongoose.model("Comment", commentSchema); // Create a model using the schema

export const commentRepository = {
  async saveComment(commentData) {
    const newComment = new comment(commentData);
    return await newComment.save(); // Save the comment using the .save() method
  },
};