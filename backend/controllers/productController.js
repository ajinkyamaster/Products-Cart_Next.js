const Product = require('../models/Product');

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    const formattedProducts = products.map((product) => ({
      id: product._id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
    }));

    res.status(200).json(formattedProducts);
  } catch (error) {
    next({
      status: 500,
      message: 'Failed to fetch products',
    });
  }
};

module.exports = {
  getProducts,
};
