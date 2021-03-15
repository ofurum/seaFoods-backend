const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/seaFoods", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});


module.exports = mongoose;
