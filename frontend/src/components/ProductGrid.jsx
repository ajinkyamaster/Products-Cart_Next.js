'use client';

import { useState, useEffect } from 'react';
import { fetchProducts } from '@/services/api';
import { useCart } from '@/context/CartContext';
import styles from '@/styles/Products.module.css';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem } = useCart();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        
        const productsWithFullImageUrls = data.map(product => ({
          ...product,
          image: product.image.startsWith('http') 
            ? product.image 
            : `${apiUrl}${product.image}`,
        }));
        
        setProducts(productsWithFullImageUrls);
        setError(null);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [apiUrl]);

  if (loading) {
    return <div className={styles.loadingMessage}>Loading products...</div>;
  }

  if (error) {
    return <div className={styles.errorMessage}>{error}</div>;
  }

  if (!products || products.length === 0) {
    return <div className={styles.loadingMessage}>No products available</div>;
  }

  return (
    <div className={styles.productsContainer}>
      <h1 className={styles.productsTitle}>Products</h1>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              <button
                className={styles.addButton}
                onClick={() => addItem(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
