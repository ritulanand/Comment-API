import CommentRepository from "../model/comment.repository.js";


export default class CommentController  {
    constructor(){
      console.log("this controler", this.addComment);
        this.commentRepository = new CommentRepository();
        this.addComment = this.addComment.bind(this);
    }

//     The error TypeError: Cannot read properties of undefined (reading 'commentRepository') occurs because the this context in the addComment method is not bound correctly when the method is passed as a callback in your route handler.

// In JavaScript, when you pass a class method as a callback (e.g., commentController.addComment), the this context is lost unless explicitly bound. This is why this.commentRepository is undefined.
  
    
   async addComment(req, res, next){
    try {
        console.log("add");
      const { name, role, content } = req.body;
      console.log("Received data:", req.body);
        //  console.log("comment controller", this.commentRepository);

      // Save the comment using the repository
      const newComment = await this.commentRepository.saveComment({ name, role, content });
   

      res.status(201).json({ message: "Comment added successfully", comment: newComment });
    } catch (error) {
        console.log("error", error);
      next(error); 
    }
  }
};
