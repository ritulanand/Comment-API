

// commet api
// role == client save comment
// admin return response

// comment schema

// name, role - "admin" or "client", content

// All are string and required. and name is unique

import express from "express";
import { commentroutes } from "./routes/comment.routes";

const server = express();
server.post("/comment", commentroutes);
server.listen(3400, () => {
  console.log("server satrted");
});
