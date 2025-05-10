

// commet api
// role == client save comment
// admin return response

// comment schema

// name, role - "admin" or "client", content

// All are string and required. and name is unique

import express from "express";
import { commentroutes } from "./routes/comment.routes.js";
import  { connectToDatabase } from "./config/index.js";

const server = express();

// Middleware to parse JSON request bodies
server.use(express.json());


server.use("/comment", commentroutes);

server.listen(3400, () => {
  console.log("Server started on port 3400");
  connectToDatabase();
});