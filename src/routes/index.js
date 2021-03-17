const express = require('express');
const userController = require("../controller/userController");
const adminController = require("../controller/wholesalerController");
const ProductController = require("../controller/productController")
const verifyUser = require("../middleware/verify")
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home');
});
router.get('/products', ProductController.getProduct)
//get all Product

//route to create product
router.post('/products',verifyUser,ProductController.createProduct)

//user route
router.post('/users', userController.signUp);
router.post('/login', userController.login);
router.post("/admin-signup", adminController.adminSignUp);
router.post('/admin-login', adminController.adminLogin);

module.exports = router;