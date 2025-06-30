import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import ConnectDB from "./ConnectDB/connect.js";
import authRoute from "./routes/AuthUser.js";

const routes = express.Router();
dotenv.config();
const app = express();

ConnectDB();

app.use(express.json());

app.use("/auth",authRoute);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`localhost:is working on ${port}`);
})
