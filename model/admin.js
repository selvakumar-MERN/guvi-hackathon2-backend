const mongoose= require("mongoose");
const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
    },
    email:{
        type:String,
        required:true,
        min:3,
    },
    password:{
        type:String,
        required:true,
        min:6,
    },
    confirmPassword:{
        type:String,
        required:true,
        min:6,
    }
})
module.exports=mongoose.model('admin', adminSchema)