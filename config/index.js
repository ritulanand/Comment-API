
import mongoose from "mongoose";

 try{
    
 const mongooseClient =
    await mongoose.connect("localhost:27017/socialmedia", {urlUnified: true});
}catch(err){
    console.log("err");
}

export default mongooseClient;

