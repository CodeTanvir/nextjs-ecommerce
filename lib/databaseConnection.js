import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGODB_URI;

let cached = global.mongoose
export const connectDB = async()=>{
    cached.promise = mongoose.connect(MONGODB_URL,{
        dbName:"ecommerce-mui",
        bufferCommands:false
    })
    console.log(cached)
}