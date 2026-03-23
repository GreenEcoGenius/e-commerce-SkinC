import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styles from "../legal.module.css";

export default function ShippingPolicyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.title}>Shipping Policy</h1>
        <h2 className={styles.sectionTitle}>Domestic &amp; European Shipping</h2>
        <p className={styles.paragraph}>Standard shipping within Europe takes 5&ndash;10 business days. Free shipping on all orders over &euro;100. Orders under &euro;100 have a flat &euro;5.99 shipping fee.</p>
        <h2 className={styles.sectionTitle}>North America</h2>
        <p className={styles.paragraph}>Delivery to the US and Canada takes 7&ndash;14 business days. Shipping rates are calculated at checkout.</p>
        <h2 className={styles.sectionTitle}>Rest of World</h2>
        <p className={styles.paragraph}>International shipping to all other destinations takes 10&ndash;20 business days. Customs duties and import taxes may apply.</p>
        <h2 className={styles.sectionTitle}>Production Time</h2>
        <p className={styles.paragraph}>Print-on-demand items require an additional 2&ndash;5 business days for production before shipping.</p>
        <h2 className={styles.sectionTitle}>Tracking</h2>
        <p className={styles.paragraph}>All orders include tracking. You will receive a confirmation email with your tracking number once your order ships.</p>
      </main>
      <Footer />
      <Navigation />
    </div>
  );
}
