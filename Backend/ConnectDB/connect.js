import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectDB = async () => {
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
    }
    catch(error){
        console.log("Error to connect mongodb",error.message);
    }
}

export default ConnectDB;