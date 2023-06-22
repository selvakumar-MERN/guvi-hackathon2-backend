const product = require('../model/products');
const admin = require('../model/admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//creating product 
const createProduct = async (req, res) => {
    const products = new product({
        productName: req.body.productName,
        category: req.body.category,
        productPrice: req.body.productPrice,
        productImage:req.body.productImage
    })
    try {
        await products.save();
        res.status(200).send("Product created sucessfully")
    }
    catch (error) {
        res.status(200).send("error")
    }
}

//deleting product
const deleteProduct = async (req, res) => {
  const data =  await product.deleteOne({ _id: req.params.id });
    try {
        res.status(200).send(data)
    }
    catch (error) {
        res.status(400).send(error)
    }
}

//updating the product
const updateProduct = async (req, res) => {
  const products=  await product.findOne({_id: req.params.id })

    await products.updateOne({ productName: req.body.productName,
        category: req.body.category,
        productPrice: req.body.productPrice, productImage:req.body.productImage})
    
    try {
        res.status(200).send("Updated  sucessfully")
    }
    catch (error) {
        res.status(400).send(error)
    }
}

//admin registration
const adminRegister = async (req, res) => {
    const emailfound = await admin.findOne({ email: req.body.email })
    if (emailfound) {
        return res.status(400).send("Email already exist")
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const hashedconf = await bcrypt.hash(req.body.confirmPassword, salt);

    const createAdmin = new admin({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,
        confirmPassword: hashedconf
    })


    try {

        await createAdmin.save();
        return res.status(201).send("Registration sucessfull please Login");
    }

    catch (error) {
        res.status(400).send(error)

    }
}

//admin login
const adminLogin = async (req, res) => {
    const User = await admin.findOne({ email: req.body.email })
    if (!User) {
        return res.status(400).send("Invalid email")
    }

    const validPassword = await bcrypt.compare(req.body.password, User.password);
    if (!validPassword)
        return res.status(400).send("Invalid password");
    try {

        const token = jwt.sign({ email: User.email }, process.env.TOKEN_SECRET);
        res.header("auth_token", token).send(token);
    }

    catch (error) {
        res.status(400).send(error)
    }

}

//admin login verification
const verifyLogin = async (req, res) => {
    const { token } = req.body
    try {
        const verify = jwt.verify(token, process.env.TOKEN_SECRET)
        if (verify) {
            await admin.findOne({ email: verify.email })
                .then((res) =>res.toJSON()) 
                .then((data)=>{
                    
                    res.status(200).send(data)
                })

        }

    }
    catch {
        res.status(400).send('invalid token')
    }
}

module.exports.createProduct = createProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct=updateProduct;
module.exports.adminRegister = adminRegister;
module.exports.adminLogin = adminLogin;
module.exports.verifyLogin = verifyLogin;
