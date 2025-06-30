import jwt from "jsonwebtoken";
import Userdetails from "../model/user.js";
import ConnectDB from "../ConnectDB/connect.js";
import bcrypt from "bcrypt";


ConnectDB();

const registerUser = async (req,res) => {
    try{
        const {username,email,password} = req.body;

        const existingUser = await Userdetails.findOne({email});
        if(existingUser){
            res.status(400).json({"message":"User already exists"})
        }
        
        const hashpassword = await bcrypt.hash(password,10);
        const createUser = await Userdetails.create({
            username:username,
            email:email,
            password:hashpassword
        });

        res.status(201).json({
            message:"User registered Successfully",
            user:createUser});
        
    }

    catch(error){
        console.log("Error to register user :",error.message);
        res.status(400).json({
            message:"Error to registration",
            error:error.message
        });
    }
   
}

const loginUser = async (req,res) => {
    try{
        const {email,password} = req.body;

        const user = await Userdetails.findOne({email});

        if(!user){
           return res.status(400).json({message:"Invalid credential"});
        }

        const ComparePassword = await bcrypt.compare(password,user.password);

        if(!ComparePassword){
            res.status(400).json({message:"Invalid credentials"});
        }

        const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"});

        res.status(200).json({
            message:"Login Successfull",
            token:token
        });

    }

    catch(error){
        res.status(400).json({
            message:"Server error",
            error:error.message
        })
    }
} 

export {registerUser,loginUser};