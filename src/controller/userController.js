const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userSignUp');

const signUp = async  (req, res) => {
    
    let password = bcrypt.hashSync(req.body.password, 10);
      User.findOne({email:req.body.email})
     .then(user => {
         if(user){
               return res.status(400).send({ message: "user already exists" });
         }
          User.create({
            name: req.body.name,
            email: req.body.email,
            password: password,
            phone: req.body.phone,
            address: req.body.address,
            role: req.body.role,
          }).then(newuser => {
              return res.status(201).json({ message: 'user created successfully',
               _id: newuser._id,
              name: newuser.name,
              phone: newuser.phone,
              address: newuser.address,
              role: newuser.role
            })
          })
     }).catch(error =>{
        return res.status(400).json({ message: "Could not save" });
    })

   
}

const login = async (req, res) =>{
    const findUser = await User.findOne({email: req.body.email})
    let password = await bcrypt.compareSync(req.body.password, findUser.password);
    let token = jwt.sign({
        userID: findUser._id,
        email: findUser.email
    }, 
    'MY_SECRET_KEY',
    {
        expiresIn: '1h'
    }
    )
    try{
        if (!findUser) return res.status(400).json({ message: "Wrong email address" });
        if(!password) return res.status(400).json({ message: "Incorrect Password" });
        return res.status(200).json({ 
            message: "LogIn successful",
            token,
            _id: findUser._id,
            name: findUser.name,
            phone: findUser.phone,
            address: findUser.address,
            role: findUser.role
    })
    }catch(error){
         return  res.status(400).json({ message: "auth failed"})
    }
}


module.exports = {signUp, login};