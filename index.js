import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';
import AdminRouter from "./routers/adminRouter.js";
import AuthRouter from "./routers/authRouter.js";
import StudentRouter from "./routers/studentRouter.js";

const app=express();
const port=4000;
dotenv.config();
app.use(express.json());

app.use("/api/school/admin/",AdminRouter)
app.use("/api/school/student/",StudentRouter)
app.use("/api/school/",AuthRouter)

app.listen(port,()=>console.log(`server is running port on ${port}`));


mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("Database connected")).catch((e)=>console.log(`error occur${e}`))