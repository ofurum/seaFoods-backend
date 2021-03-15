const express = require('express');
const userController = require("../controller/userController");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home');
});

//user route
router.post('/users', userController.signUp);
router.post('/login', userController.login);

module.exports = router;