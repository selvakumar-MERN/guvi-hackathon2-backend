const users= require('../model/users')

const createUsers = async (req, res) => {
    const{userName,email,data}=req.body
    for( const datas of data){
    const Users = new users({
        name: userName,
        email: email,
        rentedItem: datas[0].productName,
        quantity:datas[0].quantity,
        fromDate:datas[0].fromDate,
        toDate:datas[0].toDate,
        fromTime:datas[0].fromTime,
        toTime:datas[0].toTime
    })
      await Users.save();
}
    try {
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
