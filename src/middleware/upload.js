const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, files, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + "-" + Date.now());
  },
});

const fileFilter = (req, file, cb) => {
    if(file.minetype === 'image/jpeg' || file.minetype === 'image/jpg' || file.minetype === 'image/png') {
        cb(null, true)
    }else{
        cb(null, false)
    }
   // return cb(new Error("I don't have a clue!"));
};

const upload =  multer({
  storage,
  fileFilter,
}).single('image');

module.exports = upload;
