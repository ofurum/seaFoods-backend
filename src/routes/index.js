const express = require('express');
const userController = require("../controller/userController");
const adminController = require("../controller/wholesalerController");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home');
});

//user route
router.post('/users', userController.signUp);
router.post('/login', userController.login);
router.post("/admin-signup", adminController.adminSignUp);
router.post('/admin-login', adminController.adminLogin);

module.exports = router;