import express from 'express';
import TeacherTable from '../models/teacherModel.js';
const TeacherRouter = express.Router();

TeacherRouter.get('/', async (req, res) => {
    try {
        const getAll = await TeacherTable.find();
        res.status(200).json(getAll)
    } catch (error) {
        res.status(500).json({ messge: `${error}` })
    }
});

TeacherRouter.get('/:Id', async (req, res) => {
    try {
        const { Id } = req.params;
        const getById = await TeacherTable.findOne({ Id });
        if (!getById) return res.status(404).json({ messge: "Not found This Teacher" });
        res.status(200).json(getById);
    } catch (error) {
        res.status(500).json({ messge: `error occur in ${error}` })
    }
});

TeacherRouter.post('/register', async (req, res) => {
    try {
        const { Id, TFullName, TGender, TPlace, TTell, TClasses, TSubjects, TBranch, TPhoto, Password, Role } = req.body;

        if (!Id || !TFullName || !TGender || !TPlace || !TTell || !TClasses || !TSubjects || !TBranch || !TPhoto || !Password || !Role) {
            return res.status(400).json({ messge: "Please fill require fields " })
        };

        const isExisting = await TeacherTable.findOne({ Id });

        const registerteacher = await new TeacherTable({
            Id, TFullName, TGender, TPlace, TTell, TClasses, TSubjects, TBranch, TPhoto, Password, Role
        });
        if (isExisting) return res.status(400).json({ messge: "This Id already register" });
        const NewDate = await registerteacher.save();
        res.status(201).json(NewDate);
    } catch (error) {
        res.status(500).json({ messge: `error occur in ${error}` })
    }
});

TeacherRouter.put('/:Id', async (req, res) => {
    try {
        const { Id } = req.params;
        const UpdateTeacher = await TeacherTable.findOneAndUpdate({ Id }, req.body, { new: true });
        if (!UpdateTeacher) return res.status(404).json({ messge: "This Teacher ID Not Found" });
        res.status(201).json({ Messge: "Succsesfully Updated Teacher" })
    }catch(error){
        res.send(error)
    }
});

TeacherRouter.delete('/:Id', async (req, res) => {
    try {
        const { Id } = req.params;
        const Deleteeacher = await TeacherTable.findOneAndDelete({ Id });
        if (!Deleteeacher) return res.status(404).json({ messge: "This Teacher ID Not Found" });
        res.status(201).json({ Messge: "Succsesfully deleted Teacher" })
    }catch(error){
        res.send(error)
    }
});

export default TeacherRouter;