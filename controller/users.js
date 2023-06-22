const users= require('../model/users')

const createUsers = async (req, res) => {
    const Users = new users({
        name: req.body.name,
        email: req.body.email,
        rentedItem: req.body.rentedItem,
        quantity:req.body.quantity,
        fromDate:req.body.fromDate,
        toDate:req.body.toDate,
        fromTime:req.body.fromTime,
        toTime:req.body.toTime
    })
    try {
        await Users.save();
        res.status(200).send("sucessfully rented")
    }
    catch (error) {
        res.status(200).send("error")
    }
}

const allUsers= async(req,res)=>{
    const findusers = await users.find();
    if(!findusers){
        return res.status(400).send(error)
    }
    else{
        return res.status(200).send(findusers)
    }
}

const deleteUser = async (req, res) => {
    const data =  await users.deleteOne({ _id: req.params.id });
      try {
          res.status(200).send(data)
      }
      catch (error) {
          res.status(400).send(error)
      }
  }

module.exports.createUsers=createUsers;
module.exports.allUsers=allUsers;
module.exports.deleteUser=deleteUser;