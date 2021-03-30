const express = require('express');
const userController = require("../controller/userController");
const adminController = require("../controller/wholesalerController");
const ProductController = require("../controller/productController")
const verifyAdmin = require("../middleware/verify");
const verifyUser = require("../middleware/verify")
const uploadImage = require('../middleware/upload')
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Home');
});
router.get('/users', userController.allUsers)
//Products route 
router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getProductsById);
router.patch('/products/:id', ProductController.updateProduct)
router.delete('/products/:id', ProductController.deleteProduct)

//route to create product
router.post(
  "/products",
  uploadImage,
  verifyAdmin,
  ProductController.createProduct
);

//user && wholesaler route
router.post('/users', userController.signUp);
router.post('/login', userController.login);
router.post("/admin/signup", adminController.adminSignUp);
router.post('/admin/login', adminController.adminLogin);

module.exports = router;