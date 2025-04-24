import express from "express";
import StudentTable from "../models/studentModel.js";
const StudentRouter=express.Router();

StudentRouter.get('/',async(req,res)=>{
    const getStudents=await StudentTable.find();
    res.status(200).json(getStudents);

});

StudentRouter.post('/register',async(req,res)=>{
    try {
        const{Id,SFullName, SGender,SPlace,STell,SLastScore,SClass,SSubjects,SResult,SBranch,SPhoto,Password,Role}=req.body;
        const isExisting=await StudentTable.findOne({Id});
        if(isExisting) return res.status(400).json({messege:"Already Exists"})
        const registerStudent=new StudentTable({
            Id,SFullName, SGender,SPlace,STell,SLastScore,SClass,SSubjects,SResult,SBranch,SPhoto,Password,Role
    });
    const NewDate=await registerStudent.save();
    res.status(201).json(NewDate)
    } catch (error) {
        
    }

});

StudentRouter.put('/:Id',async(req,res)=>{
    try {
        const {Id} =req.params;
        const UpdateStudent=await StudentTable.findOneAndUpdate({Id:Id},req.body,{new:true});
        if(UpdateStudent){
            res.status(201).json({messge:"Succsessfully Updated Student"})
        }else return res.status(404).json("this user not exists")
    } catch (error) {
        res.status(404).json(`error occur in ${error}`)
    }
    
});

// StudentRouter.delete('/:id',async(req,res)=>{
//     const {Id} = req.params;
//     const getId=await StudentTable.findOneAndDelete({Id:Id});
//     if(getId) return res.status(200).json({messge:"Succsessfully deleted Student"});;
    
// })

export default StudentRouter