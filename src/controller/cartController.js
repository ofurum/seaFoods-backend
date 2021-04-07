const Cart = require('../models/Cart')

exports.addToCart = async(req, res) => {
       const { productId, quantity, name, price } = req.body;

       const userId = "60665a6cf4695c4b24478a3a";
    
       try{
          let cart = await Cart.findOne({ userId });
           
          if(cart) {
              //if user exists
              let productIndex = cart.products.findIndex(product => product.productId === productId);

              if(productIndex > -1 || 0){
                  //if product already in the cart update the quantity instead and multiply total price by the quantity
                  let productItem = cart.products[productIndex];
                  productItem.quantity = quantity
                  productItem.price = productIndex.price
                productItem.total = quantity * productIndex.price;
                  cart.products[productIndex] = productItem;
                  cart.subTotal = cart.products
                    .map((product) => product.total)
                    .reduce((acc, currentvalue) => acc + currentvalue);
              }

              if(!productIndex){
                  //if product does not exist in the cart add product
                  cart.products.push({
                    productId,
                    quantity,
                    name,
                    price: productIndex.price,
                    total: productIndex.price * quantity,
                  });

              }

            cart = cart.save();
            return res.status(201).send(cart);
          }

          if(!cart){
              //if no cart available to the user 
              const newCart = new Cart({
                userId,
                products: [
                  {
                    productId,
                    quantity,
                    name,
                    total: productIndex.price * quantity,
                    price: productIndex.price,
                  },
                ],
                subTotal: productIndex.price * quantity
              });
               cart = newCart
               let data = cart.save()
            return res.status(201).send(data);
          }

       }catch(error){
           res.status(500).json(error.message)
       }
}
