import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';
import AdminRouter from "./routers/adminRouter.js";
import AuthRouter from "./routers/authRouter.js";
import StudentRouter from "./routers/studentRouter.js";
import TeacherRouter from "./routers/teacherRouter.js";
import AttedenceRouter from "./routers/atddenceRouter.js";
import ResultRouter from "./routers/ResultRouter.js";

const app=express();
const port=4000;
dotenv.config();

const host="192.168.56.1"
app.use(express.json());

app.use("/api/school/admin/",AdminRouter);
app.use("/api/school/student/",StudentRouter);
app.use("/api/school/teacher/",TeacherRouter);
app.use("/api/school/attedence",AttedenceRouter);
app.use("/api/school/results/",ResultRouter);
app.use("/api/school/",AuthRouter)

app.listen(port,host,()=>console.log(`server is running port on ${host}`));


mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("Database connected")).catch((e)=>console.log(`error occur${e}`))