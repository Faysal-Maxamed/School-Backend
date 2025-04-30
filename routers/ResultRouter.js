import express from "express";
import ResultTable from "../models/ResultModel.js";
import StudentTable from "../models/studentModel.js";

const ResultRouter = express.Router();

// GET all results
ResultRouter.get("/", async (req, res) => {
  const results = await ResultTable.find().populate("studentId", "FullName Id");
  res.status(200).json(results);
});

// GET results by studentId
ResultRouter.get("/:studentId", async (req, res) => {
  const { studentId } = req.params;
  const results = await ResultTable.find({ studentId }).populate("studentId", "FullName");
  if (!results.length) {
    return res.status(404).json({ message: "No results found for this student" });
  }
  res.status(200).json(results);
});

// POST new result for a student
ResultRouter.post("/newResult", async (req, res) => {
  try {
    const { studentId, Exam, Results } = req.body;

    const student = await StudentTable.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const newResult = new ResultTable({ studentId, Exam, Results });
    const savedResult = await newResult.save();

    // Add the result ID to student's Results array
    student.Results.push(savedResult._id);
    await student.save();

    res.status(201).json(savedResult);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

export default ResultRouter;
