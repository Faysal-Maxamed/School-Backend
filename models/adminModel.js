import mongoose from 'mongoose';

const AdminSchmena=mongoose.Schema({
    Id:{
        type:String,
        require:true
    },
    FullName:{
        type:String,
        require:true
    },
    Phone:{
        type:Number,
        require:true
    },
    Gender:{
        type:String,
        require:true
    },
    place:{
        type:String,
        require:true
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
});

const AdminTable=mongoose.model("AdminTable",AdminSchmena);
export default AdminTable;