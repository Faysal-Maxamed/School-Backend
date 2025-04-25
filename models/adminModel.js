import mongoose from 'mongoose';

const AdminSchmena=mongoose.Schema({
    Id:{
        type:String,
        require:true
    },
    AFullName:{
        type:String,
        require:true
    },
    APhone:{
        type:Number,
        require:true
    },
    AGender:{
        type:String,
        require:true
    },
    Aplace:{
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