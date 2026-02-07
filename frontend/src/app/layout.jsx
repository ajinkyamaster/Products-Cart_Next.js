import '@/styles/globals.css';
import Header from '@/components/Header';
import { CartProvider } from '@/context/CartContext';

export const metadata = {
  title: 'E-Commerce Store',
  description: 'Mini e-commerce module',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
