import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Name is unique and required
  role: { type: String, enum: ["Admin", "Client"], required: true }, // Role is either "Admin" or "Client"
  content: { type: String, required: true }, // Content is required
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

export default commentSchema;