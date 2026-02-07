const validateCartRequest = (req, res, next) => {
  const { items } = req.body;

  if (!items) {
    return res.status(400).json({
      success: false,
      message: 'Items array is required',
    });
  }

  if (!Array.isArray(items)) {
    return res.status(400).json({
      success: false,
      message: 'Items must be an array',
    });
  }

  if (items.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Cart cannot be empty',
    });
  }

  for (const item of items) {
    if (!item.id || !item.name || typeof item.price !== 'number' || !item.quantity) {
      return res.status(400).json({
        success: false,
        message: 'Each item must have id, name, price, and quantity',
      });
    }

    if (item.price < 0 || item.quantity < 1) {
      return res.status(400).json({
        success: false,
        message: 'Price must be non-negative and quantity must be at least 1',
      });
    }
  }

  next();
};

module.exports = validateCartRequest;
