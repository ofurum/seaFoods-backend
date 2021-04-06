const bcrypt = require('bcrypt');
const admin = require('../models/Wholesaler')
const jwt = require("jsonwebtoken");
const cloudinary = require("../config/cloundinaryconfig");

const adminSignUp = async (req, res) => {
    try{
     let singleAdmin = await admin.findOne({ email: req.body.email })
      if (singleAdmin)return res.status(400).send({ message: "admin already exists" });
      let password = bcrypt.hashSync(req.body.password, 10);
      
      const result = await cloudinary.uploader.upload(req.file.path)
       const adminDetails = await admin.create({
         fullName: req.body.fullName,
         email: req.body.email,
         password: password,
         address: req.body.address,
         companyName: req.body.companyName,
         phone: req.body.phone,
         profileImg: result.secure_url,
         role: req.body.role,
       })
       
           if(adminDetails) return res.status(201).send({ message: 'admin successfully created'})
       }catch(error){
           return res.status(400).send({ message: "could not save"})
       }
}

const adminLogin = async (req, res) => {
    const findUser = await admin.findOne({email: req.body.email})
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
    try{
        if (!findUser) return res.status(400).send({ message: "Wrong email address" });
        if(!password) return res.status(400).send({ message: "Incorrect Password" });
        return res.status(200).send({ 
            message: "LogIn successful",
            token,
            _id: findUser._id,
            fullName: findUser.fullName,
            phone: findUser.phone,
            address: findUser.address,
            companyName: findUser.companyName,
            profileImg: findUser.profileImg,
            role: findUser.role
    })
    }catch(error){
         return  res.status(400).send({ message: "auth failed"})
    }
}
module.exports = { adminSignUp, adminLogin };