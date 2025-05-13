import mongoose from "mongoose";

export const connectusingMongoose = () => {
  try{
    mongoose.connect("mongodb://localhost:27017/socialcomment")
    .then(() => {
      console.log("mongodb using mongoose connected")
    })
    .catch((err) => {
      console.log("err", err);
    });
  }catch(err){
    console.log(err);
  }
}

