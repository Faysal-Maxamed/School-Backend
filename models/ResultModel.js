import mongoose from "mongoose";

const ResultSchema = mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "StudentTable",
    required: true,
  },
  Exam: {
    type: String,
    required: true,
  },
  Results: [
    {
      subject: {
        type: String,
        required: true,
      },
      Marks: {
        type: Number,
        min: 0,
        max: 100,
        required: true,
      }
    }
  ],
}, {
  timestamps: true,
});

const ResultTable = mongoose.model("ResultTable", ResultSchema);
export default ResultTable;
