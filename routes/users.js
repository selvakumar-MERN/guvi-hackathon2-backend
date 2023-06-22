const express=require('express')
const router= express.Router();
const userData=require('../controller/users')

router.post('/createUser',userData.createUsers);
router.delete('/deleteUser/:id',userData.deleteUser);

module.exports=router;