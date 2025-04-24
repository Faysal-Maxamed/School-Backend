import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
    Id: {
        type: String,
        require: true,
    },
    SFullName: {
        type: String,
        require: true,
    },
    SGender: {
        type: String,
        require: true,
    },
    SPlace: {
        type: String,
        require: true,
    },
    STell: {
        type: Number,
        require: true,
    },
    SLastScore: {
        type: [Number],
    },
    SClass: {
        type: [String],
    },
    SSubjects: {
        type: [String],
        require: true,
    },
    SResult: {
        type: [
            {
              Exam:{
                type:String,
                require:true
            },
            Results:{
                type:[
                    {
                        subject:{
                            type:String,
                            require:true
                        },
                        Marks:{
                            max:100,
                            min:0,
                            type:Number,
                            require:true
                        }
                    }
                ],
                require:true
            }
            },
        ],
    },
    SBranch: {
        type: String,
        require: true,
    },
    SPhoto: {
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

const StudentTable = mongoose.model("StudentTable", StudentSchema);
export default StudentTable;