const mongoose = require('../database/connecton');

const Schema = mongoose.Schema

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 3
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "customer",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;