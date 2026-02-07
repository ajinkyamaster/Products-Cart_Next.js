const submitCart = async (req, res, next) => {
  try {
    const { items } = req.body;

    const totalPrice = items.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    const cartData = {
      items,
      totalPrice,
      totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
      submittedAt: new Date(),
    };

    res.status(200).json({
      success: true,
      message: 'Cart submitted successfully',
      data: cartData,
    });
  } catch (error) {
    next({
      status: 500,
      message: 'Failed to submit cart',
    });
  }
};

module.exports = {
  submitCart,
};
