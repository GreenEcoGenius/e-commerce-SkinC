"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState("expedited");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [billingAddress, setBillingAddress] = useState("same");

  const shippingPrices: Record<string, number> = { expedited: 15.0, xpresspost: 15.0, priority: 17.95 };
  const subtotal = 92.98;
  const shipping = shippingPrices[shippingMethod];
  const total = subtotal + shipping;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/">
          <div className={styles.logo}>
            <img className={styles.logoImg} alt="I SEE, YOU FEEL" src="/Logo.svg" />
          </div>
        </Link>
        <Link href="/cart" className={styles.bagLink}>Bag</Link>
      </header>

      <div className={styles.layout}>
        <main className={styles.formSide}>
          <div className={styles.expressRow}>
            <button className={`${styles.expressBtn} ${styles.shopPay}`}>ShopPay</button>
            <button className={`${styles.expressBtn} ${styles.gPay}`}>G Pay</button>
            <button className={`${styles.expressBtn} ${styles.payPal}`}>PayPal</button>
          </div>

          <span className={styles.sectionLabel}>Contact</span>
          <div className={styles.fieldGroup}>
            <input className={styles.input} type="email" placeholder="Email address" />
            <label className={styles.checkboxRow}>
              <input type="checkbox" defaultChecked /> Email me with news and offers
            </label>
          </div>

          <span className={styles.sectionLabel}>Delivery</span>
          <div className={styles.fieldGroup}>
            <select className={styles.select}><option>Canada</option><option>United States</option></select>
            <div className={styles.fieldRow}>
              <input className={styles.input} placeholder="First name (optional)" />
              <input className={styles.input} placeholder="Last name" />
            </div>
            <input className={styles.input} placeholder="Address" />
            <input className={styles.input} placeholder="Apartment, suite, etc. (optional)" />
            <div className={styles.fieldRow}>
              <input className={styles.input} placeholder="City" />
              <select className={styles.select}><option>Province</option></select>
              <input className={styles.input} placeholder="Postal code" />
            </div>
          </div>

          <span className={styles.sectionLabel}>Shipping method</span>
          <div className={styles.radioGroup}>
            {[
              { id: "expedited", label: "Post Expedited Parcel", sub: "5 to 12 business days", price: "$15.00" },
              { id: "xpresspost", label: "Post Xpresspost", sub: "2 to 5 business days", price: "$15.00" },
              { id: "priority", label: "Post Priority", sub: "1 to 3 business days", price: "$17.95" },
            ].map((opt) => (
              <label key={opt.id} className={styles.radioOption} onClick={() => setShippingMethod(opt.id)}>
                <span className={styles.radioLeft}>
                  <input type="radio" name="shipping" checked={shippingMethod === opt.id} readOnly />
                  <span>{opt.label}<br /><span className={styles.radioSubtext}>{opt.sub}</span></span>
                </span>
                <span className={styles.radioPrice}>{opt.price}</span>
              </label>
            ))}
          </div>

          <span className={styles.sectionLabel}>Payment method</span>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption} onClick={() => setPaymentMethod("card")}>
              <span className={styles.radioLeft}>
                <input type="radio" name="payment" checked={paymentMethod === "card"} readOnly /> Credit card
              </span>
            </label>
            {paymentMethod === "card" && (
              <div className={styles.cardFields}>
                <input className={styles.input} placeholder="Card number" />
                <input className={styles.input} placeholder="Name on card" />
                <div className={styles.fieldRow}>
                  <input className={styles.input} placeholder="Expiration date (MM / YY)" />
                  <input className={styles.input} placeholder="Security code" />
                </div>
              </div>
            )}
            <label className={styles.radioOption} onClick={() => setPaymentMethod("paypal")}>
              <span className={styles.radioLeft}>
                <input type="radio" name="payment" checked={paymentMethod === "paypal"} readOnly /> PayPal
              </span>
            </label>
          </div>

          <span className={styles.sectionLabel}>Billing address</span>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption} onClick={() => setBillingAddress("same")}>
              <span className={styles.radioLeft}>
                <input type="radio" name="billing" checked={billingAddress === "same"} readOnly /> Same as shipping address
              </span>
            </label>
            <label className={styles.radioOption} onClick={() => setBillingAddress("different")}>
              <span className={styles.radioLeft}>
                <input type="radio" name="billing" checked={billingAddress === "different"} readOnly /> Use a different billing address
              </span>
            </label>
          </div>

          <label className={styles.checkboxRow}>
            <input type="checkbox" /> Save my information for faster checkout
          </label>

          <button className={styles.payButton}>Pay now</button>

          <div className={styles.legalLinks}>
            <Link href="/return-policy">Return policy</Link>
            <Link href="/terms-of-service">Terms of service</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
          </div>
        </main>

        <aside className={styles.summarySide}>
          <div className={styles.summaryItem}>
            <img className={styles.summaryThumb} alt="Face Toner" src="/Image14@3x.png" />
            <div className={styles.summaryItemInfo}>
              <span className={styles.summaryItemName}>Face Toner</span>
              <span className={styles.summaryItemSize}>100 ml</span>
            </div>
            <span className={styles.summaryItemPrice}>$47.99</span>
          </div>
          <div className={styles.summaryItem}>
            <img className={styles.summaryThumb} alt="Hair Hydrator" src="/Image6@2x.png" />
            <div className={styles.summaryItemInfo}>
              <span className={styles.summaryItemName}>Body Wash</span>
              <span className={styles.summaryItemSize}>150 ml</span>
            </div>
            <span className={styles.summaryItemPrice}>$44.99</span>
          </div>
          <div className={styles.summaryDivider} />
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Subtotal (2 items)</span>
            <span className={styles.summaryValue}>${subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Shipping</span>
            <span className={styles.summaryValue}>${shipping.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Tax</span>
            <span className={styles.summaryValue} style={{ color: "var(--Gray-3)" }}>$0.00</span>
          </div>
          <div className={styles.summaryDivider} />
          <div className={styles.totalRow}>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
