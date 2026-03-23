"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import { useCart } from "../../lib/cart-context";
import styles from "./page.module.css";

const FREE_SHIPPING_THRESHOLD = 100;

export default function CartPage() {
  const { items, updateQty, removeItem } = useCart();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shippingGap = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const shippingPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const isEmpty = items.length === 0;

  function handleCheckout() {
    window.location.href = "https://buy.stripe.com/eVq3cv0l80ms80h1B45Rm00";
  }

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.pageTitle}>Your bag</h1>

        <div className={styles.shippingBar}>
          <p className={styles.shippingText}>
            {shippingGap > 0
              ? `You're $${shippingGap.toFixed(2)} away from free shipping`
              : "You've unlocked free shipping!"}
          </p>
          <div className={styles.shippingTrack}>
            <div className={styles.shippingProgress} style={{ width: `${shippingPercent}%` }} />
          </div>
        </div>

        <div className={styles.layout}>
          <div className={styles.cartSide}>
            {isEmpty ? (
              <>
                <p className={styles.emptyText}>Your bag is empty</p>
                <Link href="/shop">
                  <button className={styles.shopAllButton}>Shop all</button>
                </Link>
              </>
            ) : (
              items.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img className={styles.itemImage} alt={item.name} src={item.image} />
                  <div className={styles.itemDetails}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemSize}>Size: {item.size}</span>
                    <div className={styles.itemActions}>
                      <div className={styles.qtyPicker}>
                        <button className={styles.qtyButton} onClick={() => updateQty(item.id, -1)}>&ndash;</button>
                        <span className={styles.qtyValue}>{item.qty}</span>
                        <button className={styles.qtyButton} onClick={() => updateQty(item.id, 1)}>+</button>
                      </div>
                      <button className={styles.deleteButton} onClick={() => removeItem(item.id)}>&#128465;</button>
                    </div>
                  </div>
                  <div className={styles.itemPriceCol}>
                    {item.originalPrice && <span className={styles.itemOriginalPrice}>${item.originalPrice.toFixed(2)}</span>}
                    <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          <aside className={styles.summarySide}>
            <h2 className={styles.summaryTitle}>Order summary</h2>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Subtotal ({items.reduce((s, i) => s + i.qty, 0)} items)</span>
              <span className={styles.summaryValue}>${subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <div>
                <span className={styles.summaryLabel}>Shipping</span>
                {shippingGap > 0 && <span className={styles.summarySubtext}>You&apos;re ${shippingGap.toFixed(2)} away from free shipping</span>}
              </div>
              <span className={styles.summaryValue} style={{ color: "var(--Gray-3)" }}>Calculated in checkout</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Tax</span>
              <span className={styles.summaryValue} style={{ color: "var(--Gray-3)" }}>Calculated in checkout</span>
            </div>
            <div className={styles.summaryDivider} />
            <div className={styles.summaryTotal}>
              <span className={styles.totalLabel}>Estimated total</span>
              <span className={styles.totalValue}>${subtotal.toFixed(2)}</span>
            </div>
            <button className={styles.checkoutButton} onClick={handleCheckout}>Checkout</button>
            <p className={styles.termsText}>
              By continuing, I confirm that I have read and accept the <Link href="/terms-of-service">Terms of Service</Link> and the <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
            <span className={styles.paymentLabel}>We accept</span>
            <div className={styles.paymentIcons}>
              <span className={`${styles.paymentIcon} ${styles.visa}`}>VISA</span>
              <span className={`${styles.paymentIcon} ${styles.mc}`}>Mastercard</span>
              <span className={`${styles.paymentIcon} ${styles.amex}`}>Amex</span>
              <span className={styles.paymentIcon}>Discover</span>
              <span className={`${styles.paymentIcon} ${styles.applepay}`}>Apple Pay</span>
              <span className={`${styles.paymentIcon} ${styles.paypal}`}>PayPal</span>
            </div>
          </aside>
        </div>
      </main>

      <section className={styles.productsSection}>
        <h2 className={styles.productsSectionTitle}>{isEmpty ? "Best sellers" : "You might also like"}</h2>
        <div className={styles.productsRow}>
          <ProductCard slug="isyf-essential-tee-women" name="ISYF Essential Tee" price="€35.00" image="/product-tshirt.jpg" />
          <ProductCard slug="isyf-embroidered-hoodie-women" name="ISYF Embroidered Hoodie" price="€89.00" image="/product-hoodie.jpg" />
          <ProductCard slug="isyf-feels-message-tee-men" name="ISYF FEELS Message Tee" price="€29.90" image="/product-feels-tee.jpg" />
          <ProductCard slug="isyf-cap" name="ISYF Cap" price="€39.00" image="/product-cap.jpg" />
        </div>
      </section>

      <Footer />
      <Navigation />
    </div>
  );
}
