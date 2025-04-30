import express from 'express';
import AdminTable from '../models/adminModel.js';
const AdminRouter = express.Router();
import bcrypt from 'bcrypt'

AdminRouter.get('/', async (req, res) => {
    try {
        const response = await AdminTable.find();
        res.status(200).json(response)
    } catch (error) {
        res.status(404).send(error)
    }

});


AdminRouter.get('/:Id', async (req, res) => {
    
    try {
        const {Id} =req.params;
        const FindById = await AdminTable.findOne({Id});
        if(!FindById){
            res.status(404).json({messge:"Not Found With  Admin Aid "+Id})
        }else{
            res.status(200).json(FindById)
        }
        
    } catch (error) {
        res.status(404).send(error)
    }

});

AdminRouter.post('/register', async (req, res) => {
    try {

        const { Id, FullName, Phone, Gender, place, Password, Role } = req.body;

        if(!Id || !FullName || !Phone || ! Gender || !place || !Password  || !Role){
            return res.status(400).json({messge:"Please fill all required field"})
        }

        const existingAdmin= await AdminTable.findOne({Id});

        if(existingAdmin){
            res.status(409).json({messge:"Admin with this ID already exists"})
        }
        const hashed=await bcrypt.hash(Password,10)
        const registerAdmin = new AdminTable({
            Id, FullName, Phone, Gender, place, Password:hashed ,Role
        });
        const NewDate = await registerAdmin.save();
        res.status(201).json(NewDate);
    } catch (error) {
        res.status(404).json({messge:`error ocuuring in ${error}`})
    }
});

AdminRouter.put('/:Id',async(req,res)=>{
   try{
    const {Id}=req.params;
    const FindAdmin=await AdminTable.findOneAndUpdate({Id:Id},req.body,{new:true});
    if(FindAdmin){
        res.status(201).json({messge:"Succsessfully Updated Admin"})
    }else{
        res.status(404).json({messge:"Failed To Updated Admin " +Id})
    }
   }catch(error){
    res.status(404).json({messge:`error occuring in ${error}`})
   }
    
});

AdminRouter.delete('/:Id',async(req,res)=>{
   try{
    const {Id}=req.params;

    const FinAdminAndDelete=await AdminTable.findOneAndDelete({Id});
    if(!FinAdminAndDelete){
        res.status(404).json({messge:"Not Found With  Admin Aid "+Id})
    }else{
        
        res.status(200).json({messge:"Succsessfully Deleted Admin with Admin AId " +Id})
    }
   }catch(error){
    res.status(500).json({messge:`error ocuuring in ${error}`})
   }
})
export default AdminRouter;