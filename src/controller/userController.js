const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userSignUp');
  
const allUsers = async (req, res) => {
    const users = await User.find()
    if(!users) return res.status(400).json({ message: "users not found"})

    const getUsers = [...users];
    return res.status(200).json({ data: getUsers });
}
const signUp = async(req, res) => {
    try{
    let password = bcrypt.hashSync(req.body.password, 10);
    let user = await User.findOne({ email: req.body.email });
    if(user) return res.status(400).send({ message: "user already exists" });
    user = await User.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: password,
      phone: req.body.phone,
      address: req.body.address,
      role: req.body.role,
    });
    if(!user) return  res.status(500).send({ message: "coildn't create user" });
    return res.status(201).send({ message: "user created",user });
     
}catch(error){
  return res.status(400).json({ message: error.toString()});
}
}

const login = async (req, res) =>{
    try{
    const findUser = await User.findOne({email: req.body.email})
    let password = await bcrypt.compareSync(req.body.password, findUser.password);
    let token = jwt.sign({
        userID: findUser._id,
        email: findUser.email
    }, 
    'MY_SECRET_KEY',
    {
        expiresIn: '24h'
    }
    )
        if (!findUser) return res.status(400).json({ message: "Wrong email address" });
        if(!password) return res.status(400).json({ message: "Incorrect Password" });
        return res.status(200).json({ 
            message: "LogIn successful",
            token,
            _id: findUser._id,
            fullName: findUser.fullName,
            phone: findUser.phone,
            address: findUser.address,
            role: findUser.role
    })
    }catch(error){
         return  res.status(400).json({ message: error.toString()})
    }
}


module.exports = {signUp, login, allUsers};