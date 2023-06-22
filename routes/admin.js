const express=require('express')
const router= express.Router();
const adminData=require('../controller/admin')
const userData=require('../controller/users')

router.post('/createProduct',adminData.createProduct);
router.post('/login',adminData.adminLogin);
router.post('/register',adminData.adminRegister);
router.post('/verifylogin',adminData.verifyLogin);  
router.delete('/deleteProduct/:id',adminData.deleteProduct);
router.patch('/updateProduct/:id',adminData.updateProduct)
router.get('/users',userData.allUsers)

module.exports=router;