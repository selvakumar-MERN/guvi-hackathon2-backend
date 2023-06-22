const express=require('express')
const router= express.Router();
const productData=require('../controller/products');
const orderData=require('../controller/payementcontrol');

router.get('/products',productData.allProducts)
router.post('/payment',orderData.orders)
router.post('/verify',orderData.verify)

module.exports=router;