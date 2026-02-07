require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce';
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected for seeding');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

const seedProducts = async () => {
  try {
    await connectDB();

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    const products = [
      {
        name: 'Wireless Headphones',
        price: 79.99,
        image: '/images/wireless-headphones.jpg',
        description: 'High-quality wireless headphones with noise cancellation',
      },
      {
        name: 'USB-C Cable',
        price: 12.99,
        image: '/images/usb-c-cable.jpg',
        description: 'Durable USB-C charging and data cable',
      },
      {
        name: 'Portable Charger',
        price: 34.99,
        image: '/images/portable-charger.jpg',
        description: '20000mAh portable power bank',
      },
      {
        name: 'Wireless Mouse',
        price: 24.99,
        image: '/images/wireless-mouse.jpg',
        description: 'Ergonomic wireless mouse with precision tracking',
      },
      {
        name: 'Phone Stand',
        price: 14.99,
        image: '/images/phone-stand.jpg',
        description: 'Adjustable phone stand for desk',
      },
      {
        name: 'Screen Protector',
        price: 9.99,
        image: '/images/screen-protector.jpg',
        description: 'Tempered glass screen protector',
      },
    ];

    await Product.insertMany(products);
    console.log(`${products.length} products seeded successfully`);

    await mongoose.disconnect();
    console.log('Database seeding completed');
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedProducts();
