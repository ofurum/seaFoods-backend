const Product = require('../models/Product');

exports.createProduct = (req, res) => {
    const product = new Product({
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description,
      ownedBy: req.wholesaler.userID,
    })
    product.save()
    .then(newproduct => {
        return res.status(201).json({ message: "Product successfully created!", product})
    }).catch(error => {
        return res.status(400).json({ message: "failed to create product!"})
    })
}

exports.getProduct = async (req, res) => {
    const product = await Product.find()
    if(!product) return res.status(400).json({message: 'No product'})

    const newProduct = [...product]
    return res.status(200).json({ data : newProduct})
}