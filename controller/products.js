const product= require('../model/products')

const allProducts= async(req,res)=>{
    const findproducts = await product.find();
    if(!findproducts){
        return res.status(400).send(error)
    }
    else{
        return res.status(200).send(findproducts)
    }
}



module.exports.allProducts=allProducts;