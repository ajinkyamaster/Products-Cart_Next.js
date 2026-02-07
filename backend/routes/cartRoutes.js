const express = require('express');
const { submitCart } = require('../controllers/cartController');
const validateCartRequest = require('../middleware/validation');

const router = express.Router();

router.post('/', validateCartRequest, submitCart);

module.exports = router;
