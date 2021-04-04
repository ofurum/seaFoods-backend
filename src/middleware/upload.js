const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, files, cb) => {
    cb(null, "./public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + "-" + Date.now());
  },
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
       cb(null, true)
    }else{
        cb(null, false)
    }
   return cb(new Error("I don't have a clue!"));
};

const upload =  multer({
  storage,
  fileFilter,
}).array('image', 2);

module.exports = upload;
