const product= require('../model/products')
const moment= require('moment')

const allProducts= async(req,res)=>{
    const findproducts = await product.find();
    if(!findproducts){
        return res.status(400).send(error)
    }
    else{
        return res.status(200).send(findproducts)
    }
}
const cartProducts= async(req,res)=>{
    const {id}=req.params
    await product.updateOne({"_id":id},{$set:{"hours":1}})
    
    const findproducts = await product.find({_id:id});
    if(!findproducts){
        return res.status(400).send(error)
    }
    else{
        return res.status(200).send(findproducts)
    }
}

const calender= async(req,res)=>{
       const{id}=req.params
       const {fromDate,fromTime,toDate,toTime}=req.body
      
       const findproducts = await product.findOne({_id:id});
       if(!findproducts){
        return res.status(400).send(error)
    }
      
      const starttime= moment(`${fromDate}T${fromTime}`)
      const endtime=moment(`${toDate}T${toTime}`)
      const duration= moment.duration(endtime.diff(starttime));
      const hours=parseInt(duration.asHours())
     
  

   await findproducts.updateOne({fromDate:fromDate,fromTime:fromTime,toDate:toDate,toTime:toTime,hours:hours})
     return  res.status(200).send(hours.toString())
 

  
}


        


module.exports.calender=calender;
module.exports.cartProducts=cartProducts;
module.exports.allProducts=allProducts;
