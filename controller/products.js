const product= require('../model/products')

const allProducts= async(req,res)=>{
try{
    const findproducts = await product.find();
    if(!findproducts){
        return res.status(400).send(error)
    }
    else{
        return res.status(200).send(findproducts)
    }
}
catch(error){
    return error
}
}



module.exports.allProducts=allProducts;
