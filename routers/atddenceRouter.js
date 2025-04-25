import express from 'express';
import AttedenceTable from '../models/attedence.js';
import StudentTable from '../models/studentModel.js'; 

const AttedenceRouter = express.Router();

AttedenceRouter.get("/student/full/:id", async (req, res) => {
    try {
        const studentId = req.params.id;

        const studentWithAttendance = await StudentTable.findById(studentId)
            .populate("Attendances") 
            .exec();

        if (!studentWithAttendance) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(studentWithAttendance);
    } catch (error) {
        res.status(500).json({ message: `Error fetching student data: ${error.message}` });
    }
});


// ✅ POST: Send new attendance + Update StudentTable
AttedenceRouter.post('/send', async (req, res) => {
    try {
        const { StudentId, TeacherId, Attedence } = req.body;

        if (!StudentId || !TeacherId || !Attedence) {
            return res.status(404).json({ message: "Please fill required fields" });
        }

        // 1. Save attendance
        const newAttendance = new AttedenceTable({
            StudentId,
            TeacherId,
            Attedence
        });
        const savedAttendance = await newAttendance.save();

        // 2. Push attendance _id to StudentTable
        await StudentTable.findByIdAndUpdate(
            StudentId,
            { $push: { Attendances: savedAttendance._id } },
            { new: true }
        );

        res.status(201).json(savedAttendance);
    } catch (error) {
        res.status(500).json({ message: `Error occurred: ${error.message}` });
    }
});

export default AttedenceRouter;
