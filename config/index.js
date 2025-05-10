import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    const mongooseClient = await mongoose.connect("mongodb://localhost:27017/socialcomment");
    console.log("Connected to the database successfully");
    console.log("Database connection details:", mongooseClient.connection.host, mongooseClient.connection.port);
    return mongooseClient;
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1); // Exit the process with failure
  }
};

