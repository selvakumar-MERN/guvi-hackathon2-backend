const mongoose= require("mongoose");
const userSchema=new mongoose.Schema({
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
    rentedItem:{
        type:String,
        required:true,
    },
    quantity:{
        type:String,
        required:true,
    },
    fromDate:{
        type:String,
        required:true,
    },
    toDate:{
        type:String,
        required:true,
    },
    fromTime:{
        type:String,
        required:true,
    },
    toTime:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:"Paid",
    }

})
module.exports= mongoose.model("users",userSchema);
