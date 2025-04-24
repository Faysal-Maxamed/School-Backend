import mongoose from "mongoose";

const TeacherSchema = mongoose.Schema({
    Id: {
        type: String,
        require: true,
    },
    TFullName: {
        type: String,
        require: true,
    },
    TGender: {
        type: String,
        require: true,
    },
    TPlace: {
        type: String,
        require: true,
    },
    TTell: {
        type: Number,
        require: true,
    },
    TClasses: {
        type: [String],
        required:true,
    },
    TSubjects: {
        type: [String],
        require: true,
    },
    TBranch: {
        type: [String],
        require: true,
    },
    TPhoto: {
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

})

const TeacherTable = mongoose.model("TeacherTable", TeacherSchema);
export default TeacherSchema;