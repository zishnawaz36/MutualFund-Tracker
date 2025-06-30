import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
import { configDotenv } from "dotenv";
import ConnectDB from "./ConnectDB/connect";

const routes = express.Router();
app.use(configDotenv());
const app = express();

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`localhost:is working on ${port}`);
})
