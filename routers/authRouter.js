import express from 'express';
const AuthRouter =express.Router();
import Teacher from '../models/teacherModel.js'
import Student from '../models/studentModel.js'
import Admin from '../models/adminModel.js'

AuthRouter.post('/login',async(req,res)=>{
    const {Id,Password,Role}=req.body;

    let User;
    if(Role==="Admin") User=Admin;
    else if(Role==="Teacher") User=Teacher;
    else if(Role==="Student") User=Student;
    else return res.status(404).json({messge:"Invalid role"});

    try {
        const user=await User.findOne({Id});
        if(!user) return res.status(400).json({messge:"User not found"});

        if(user.Password!==Password){
            res.status(401).json({messge:"Incorrect password"})
        }

        res.status(200).json({messge:"Succsessfully Login Welcome",Id:User.Id,Password:User.Password,Role:User.Role})
    } catch (error) {
        res.status(500).json(`error occur in ${error}`)
    }
});

export default AuthRouter