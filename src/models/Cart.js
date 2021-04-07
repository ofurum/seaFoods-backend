const mongoose = require("../database/connecton");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      productId:{ 
        type: Number,
        required: true
      },
      quantity:{ 
        type: Number,
        min: [1, 'Quantity can not be less then 1.'],
        required: true
      },
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      total: {
        type: Number,
        required: true,
      }
    },
  ],
  active: {
    type: Boolean,
    default: true,
  },
  modifiedOn: {
    type: Date,
    default: Date.now,
  },
  subTotal: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Cart', CartSchema);