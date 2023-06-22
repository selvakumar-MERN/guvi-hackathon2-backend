const mongoose= require("mongoose");
const productSchema= new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        min:3,
        max:225,
    },
    category:{
        type:String,
        required:true,
        min:3,
        max:225,
    },
    productPrice:{
        type:String,
        required:true,
        min:3,
        max:225,
    },
    productImage:{
        type:String,
        required:true,
    }
   
})

module.exports=mongoose.model('products',productSchema);