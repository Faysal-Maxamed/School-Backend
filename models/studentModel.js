import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
  Id: {
    type: String,
    required: true,
  },
  FullName: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Place: {
    type: String,
    required: true,
  },
  Tell: {
    type: Number,
    required: true,
  },
  LastScore: {
    type: [Number],
  },
  Class: {
    type: [String],
  },
  Subjects: {
    type: [String],
    required: true,
  },
  Branch: {
    type: String,
    required: true,
  },
  Photo: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
  Attendances: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AttedenceTable",
    }
  ],
  Results: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ResultTable",
    }
  ],
}, {
  timestamps: true,
});

const StudentTable = mongoose.model("StudentTable", StudentSchema);
export default StudentTable;
