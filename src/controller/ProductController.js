const Product = require('../models/Product');

exports.createProduct = (req, res) => {
  
     //req.body.image = req.file;

    const product = new Product({
      name: req.body.name,
      image: req.file,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      ownedBy: req.wholesaler.userID,
    });
     console.log(req.image);
     console.log('file', req.file)
    product.save()
    .then(newproduct => {
        return res.status(201).json({ message: "Product successfully created!", product})
    }).catch(error => {
        return res.status(400).json({ message: error.message })
    })

}

exports.getProducts = async (req, res) => {
    const product = await Product.find()
    if(!product) return res.status(400).json({message: 'No product'})

    const newProduct = [...product]
    return res.status(200).json({ data : newProduct})
}

exports.getProductsById = async (req, res) => {
    const product = await Product.find({ category: 'seaFoods' })
    return res.json(product);
}

exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
    .then(() =>{
        Product.findById(req.params.id)
        .then((product) =>{
            return res
              .status(200)
              .json({ message: "product updated", product });
        }).catch((error) => {
            return res.status(400).json({ message: "cannot update product"})
        })
    })
}

exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then((product) => {
        return res.status(200).json({ message: "product deleted successfully", product})
    }).catch((error) => {
        return res.status(400).json({ message: error.message })
    })
}
