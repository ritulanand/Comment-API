import { commentRepository } from "../model/comment.repository.js";

export const commentController = {
  async addComment(req, res, next) {
    try {
      const { name, role, content } = req.body;
      console.log("Received data:", req.body);

      // Save the comment using the repository
      const newComment = await commentRepository.saveComment({ name, role, content });

      res.status(201).json({ message: "Comment added successfully", comment: newComment });
    } catch (error) {
      next(error); // Pass errors to the error-handling middleware
    }
  },
};