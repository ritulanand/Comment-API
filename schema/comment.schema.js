import mongoose from "mongoose";


const commentschema = new mongoose.Schema({
    name : {type : String, required : true, unique: true},
    role : {type: String, enum : ["Admin", "Client"], required : true},
    content : {type : String, required : true}
})
export default commentschema;