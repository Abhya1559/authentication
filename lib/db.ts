import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string

if (!MONGO_URI) {
  throw new Error("please define MONGO_URI")
}

export const connectDB = async ():Promise<void> =>{
  try {
    await mongoose.connect(MONGO_URI)
    console.log("mongoDB connected")
  } catch (error) {
    console.error("MongoDB connection Error",error)
  }
}