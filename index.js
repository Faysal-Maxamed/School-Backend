import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';

const app=express();
const port=4000;
dotenv.config();


app.listen(port,()=>console.log(`server is running port on ${port}`));


mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("Database connected")).catch((e)=>console.log(`error occur${e}`))