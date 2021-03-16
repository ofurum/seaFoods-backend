const mongoose = require("../database/connecton");

const Schema = mongoose.Schema;

const WholesalerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 3,
  },
  address: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: [true, 'Company Name is required']
  },
  profileImg: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "admin",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const WholesalerModel = mongoose.model("wholesaler", WholesalerSchema);

module.exports = WholesalerModel;
