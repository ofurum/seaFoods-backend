const Product = require('../models/Product');
const cloudinary = require("../config/cloundinaryconfig")

exports.createProduct = (req, res) => {
  const promises = [];
  req.files.map((file) => {
    console.log(file.path);
    promises.push(
      cloudinary.uploader
        .upload(file.path)
        .then((results) => results.secure_url)
        .catch((err) => {
          err.message;
        })
    );
  });

  return Promise.all(promises).then((results) => {
        const urls = []
        results.map(result => {
          urls.push(result);
        })
      console.log(urls)
       const product = new Product({
         name: req.body.name,
         image: urls,
         price: req.body.price,
         description: req.body.description,
         category: req.body.category,
        ownedBy: req.wholesaler.userID,
       });
      return product 
         .save()
         .then((newproduct) => {
           return res
             .status(201)
             .json({ message: "Product successfully created!", product });
         })
         .catch((error) => {
           return res.status(400).json({ message: error.message });
         });
  }).catch(err => {
      return err.message
  });
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

exports.searchProducts = (req, res) => {
    const searchField = req.query.name;
    Product.find({name:{$regex: searchField, $options: '$c'}})
    .then(data => {
        console.log(data)
        res.json({message: 'product found!', data})
    }).catch(error => {
        res.status(400).json(error.message)
    })
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
