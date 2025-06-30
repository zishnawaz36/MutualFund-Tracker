import mongoose from "mongoose";

const ConnectDB = async () => {
    try{
        mongoose.connect(process.env.MONGOURL);
        console.log("MongoDB connected Successfully");
    }
    catch(error){
        console.log("Error to connect mongodb",error.message);
    }
}

export default ConnectDB;