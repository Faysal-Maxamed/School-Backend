import express from "express";
import StudentTable from "../models/studentModel.js";

const StudentRouter = express.Router();

// GET all students
StudentRouter.get("/", async (req, res) => {
  const getStudents = await StudentTable.find().populate("Results");
  res.status(200).json(getStudents);
});

// GET student by ID
StudentRouter.get("/:Id", async (req, res) => {
  const { Id } = req.params;
  const getById = await StudentTable.findOne({ Id }).populate("Results");
  if (!getById) {
    return res.status(404).json({ message: "This Student Not Found" });
  } else {
    res.status(200).json(getById);
  }
});

// Register new student
StudentRouter.post("/register", async (req, res) => {
  try {
    const {
      Id,
      FullName,
      Gender,
      Place,
      Tell,
      LastScore,
      Class,
      Subjects,
      Branch,
      Photo,
      Password,
      Role,
    } = req.body;

    if (
      !Id ||
      !FullName ||
      !Gender ||
      !Tell ||
      !Class ||
      !Subjects ||
      !Branch ||
      !Photo ||
      !Password ||
      !Role
    ) {
      return res.status(400).json({ message: "Please fill required fields" });
    }

    const isExisting = await StudentTable.findOne({ Id });
    if (isExisting)
      return res.status(400).json({ message: "Student already exists" });

    const newStudent = new StudentTable({
      Id,
      FullName,
      Gender,
      Place,
      Tell,
      LastScore,
      Class,
      Subjects,
      Branch,
      Photo,
      Password,
      Role,
    });

    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// Update student
StudentRouter.put("/:Id", async (req, res) => {
  try {
    const { Id } = req.params;
    const updatedStudent = await StudentTable.findOneAndUpdate(
      { Id },
      req.body,
      { new: true }
    );
    if (updatedStudent) {
      res.status(200).json({ message: "Successfully Updated Student" });
    } else {
      res.status(404).json({ message: "This user does not exist" });
    }
  } catch (error) {
    res.status(500).json({ message: `Error occurred: ${error.message}` });
  }
});

// Delete student
StudentRouter.delete("/:Id", async (req, res) => {
  const { Id } = req.params;
  const deletedStudent = await StudentTable.findOneAndDelete({ Id });
  if (deletedStudent) {
    return res.status(200).json({ message: "Successfully deleted student" });
  } else {
    return res.status(404).json({ message: "Student not found" });
  }
});

export default StudentRouter;
