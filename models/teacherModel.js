import mongoose from "mongoose";

const TeacherSchema = mongoose.Schema({
    Id: {
        type: String,
        require: true,
    },
    FullName: {
        type: String,
        require: true,
    },
    Gender: {
        type: String,
        require: true,
    },
    Place: {
        type: String,
        require: true,
    },
    Tell: {
        type: Number,
        require: true,
    },
    Classes: {
        type: [String],
        required:true,
    },
    Subjects: {
        type: [String],
        require: true,
    },
    Branch: {
        type: [String],
        require: true,
    },
    Photo: {
        type: String,
        require: true,
    },
    Password:{
        type:String,
        require:true
    },
    Role: {
        type: String,
        require: true,
    },

},{
    timestamps: true
})

const TeacherTable = mongoose.model("TeacherTable", TeacherSchema);
export default TeacherTable;