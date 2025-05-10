import mongoose from "mongoose";

const commentSchema = new mongoose.schema(
     {type : "String", required, unique: true},
     {type : "String", enum : ["Admin", "Client"]}
// name, role - "admin" or "client", content

 

// All are string and required. and name is unique
)

export default commentSchema;