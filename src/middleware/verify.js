const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
   try{
       let token = req.headers.authorization.split(" ")[1];
       let decoded = jwt.verify(token, "MY_SECRET_KEY");
       req.wholesaler = decoded;
       next();
   }catch(error){
       res.status(400).json({message: "token not valid"})
   }
}