import Navigation from "../../components/Navigation";
import InstagramSection from "../../components/InstagramSection";
import SubscribeSection from "../../components/SubscribeSection";
import Footer from "../../components/Footer";
import styles from "../legal.module.css";

export default function ShippingPolicyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.title}>Shipping policy</h1>
        <p className={styles.paragraph}>We are committed to delivering your skincare products quickly and safely. Here is everything you need to know about our shipping options.</p>
        <h2 className={styles.sectionTitle}>Domestic shipping</h2>
        <ul className={styles.list}>
          <li><strong>Standard shipping:</strong> 3–5 business days — Free on orders over $50, otherwise $5.99</li>
          <li><strong>Express shipping:</strong> 1–2 business days — $15.00</li>
          <li><strong>Priority shipping:</strong> Next business day — $17.95</li>
        </ul>
        <h2 className={styles.sectionTitle}>International shipping</h2>
        <p className={styles.paragraph}>We ship to most countries worldwide. International orders typically arrive within 7–14 business days. Shipping rates vary by destination and are calculated at checkout. Please note that customs duties and import taxes may apply.</p>
        <h2 className={styles.sectionTitle}>Order processing</h2>
        <p className={styles.paragraph}>Orders are processed within 1–2 business days. Orders placed after 2 PM EST or on weekends and holidays will be processed the next business day.</p>
        <h2 className={styles.sectionTitle}>Tracking your order</h2>
        <p className={styles.paragraph}>Once your order ships, you will receive a confirmation email with a tracking number. You can use this number to monitor the status of your delivery.</p>
      </main>
      <InstagramSection />
      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
