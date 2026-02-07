'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from '@/styles/Cart.module.css';

export default function CartPage() {
  const { cart, updateQuantity, removeItem, getTotalItems, getTotalValue } = useCart();

  if (cart.length === 0) {
    return (
      <div className={styles.cartContainer}>
        <h1 className={styles.cartTitle}>Shopping Cart</h1>
        <div className={styles.emptyCart}>
          <p className={styles.emptyCartMessage}>Your cart is empty</p>
          <Link href="/" className={styles.emptyCartButton}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Shopping Cart</h1>
      <div className={styles.cartItemsList}>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.cartItemImage}
            />
            <div className={styles.cartItemDetails}>
              <h2 className={styles.cartItemName}>{item.name}</h2>
              <p className={styles.cartItemPrice}>
                ${item.price.toFixed(2)} each
              </p>
              <div className={styles.cartItemControls}>
                <div className={styles.quantityControl}>
                  <button
                    className={styles.quantityButton}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span className={styles.quantityDisplay}>{item.quantity}</span>
                  <button
                    className={styles.quantityButton}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cartSummary}>
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Items:</span>
          <span className={styles.summaryValue}>{getTotalItems()}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Subtotal:</span>
          <span className={styles.summaryValue}>${getTotalValue().toFixed(2)}</span>
        </div>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Total:</span>
          <span>${getTotalValue().toFixed(2)}</span>
        </div>
        <button className={styles.checkoutButton}>Proceed to Checkout</button>
      </div>
    </div>
  );
}
