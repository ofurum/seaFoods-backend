const mongoose = require('../database/connecton');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ownedBy:{
        type: Schema.Types.ObjectId,
        ref: 'Wholesaler'
    },
    // specification: {
    //     type: Schema.Types.Mixed
    // },
    category: {
        type: String,
    }
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;