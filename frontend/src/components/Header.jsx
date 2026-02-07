'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from '@/styles/Header.module.css';

export default function Header() {
  const { getTotalItems } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/">
          <h1 className={styles.headerTitle}>Ajinkya's Store</h1>
        </Link>
        <nav className={styles.headerNav}>
          <Link href="/" className={styles.headerLink}>
            Products
          </Link>
          <Link href="/cart" className={styles.headerCart}>
            Cart ({getTotalItems()})
          </Link>
        </nav>
      </div>
    </header>
  );
}
