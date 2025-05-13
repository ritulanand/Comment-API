import mongoose from "mongoose";
import commentSchema from "../schema/comment.schema.js";

const comment = mongoose.model("Comment", commentSchema); 
console.log("comment", comment);

export default class CommentRepository  {
    constructor() {
      console.log("this repo", this);
        this.collection = "comment";
    }
   async saveComment(commentData) {
    const newComment = new comment(commentData);
    console.log("new", newComment);
    console.log("this collection", this.collection);
    return await newComment.save(); 
  }
};
