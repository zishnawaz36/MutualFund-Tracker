import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
    }
},{timestamps:true});

const Userdetails = mongoose.model("Userdetails",userSchema);

export default Userdetails;
