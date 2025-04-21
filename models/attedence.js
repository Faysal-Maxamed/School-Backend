import { time } from "console";
import mongoose from "mongoose";
import { type } from "os";

const AttedenceSchema=mongoose.Schema({
    StudentId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
    },
    TeacherId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    DateAndTime:{
        type:Date,
        default:Date.now
    },
    Attedence: {
        type: {
            Soomali: {
                type: Boolean,
                require: false
            },
            English: { 
                type: Boolean,
                 required: false
            },
            Math: {
                 type: Boolean,
                  required: false
             },
            Science: { 
                type: Boolean, 
                required: false 
            },
        },
    },
})

const AttedenceTable=mongoose.model("AttedenceTable",AttedenceSchema);

export default AttedenceSchema;