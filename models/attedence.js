import mongoose from "mongoose";

const AttedenceSchema = mongoose.Schema({
    StudentId: {
        type: String,
        required: true
    },
    TeacherId: {
        type: String,
        required: true,
    },
    DateAndTime: {
        type: Date,
        default: Date.now,
    },
    Attedence: {
        Soomali: {
            type: Boolean,
            default: false,
        },
        English: {
            type: Boolean,
            default: false,
        },
        Math: {
            type: Boolean,
            default: false,
        },
        Science: {
            type: Boolean,
            default: false,
        },
    },
});

const AttedenceTable = mongoose.model("AttedenceTable", AttedenceSchema);
export default AttedenceTable;
