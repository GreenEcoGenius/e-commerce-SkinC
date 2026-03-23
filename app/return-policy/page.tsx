import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styles from "../legal.module.css";

export default function ReturnPolicyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.title}>Return Policy</h1>
        <h2 className={styles.sectionTitle}>30-Day Return Window</h2>
        <p className={styles.paragraph}>We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in original condition with all tags attached.</p>
        <h2 className={styles.sectionTitle}>How to Return</h2>
        <p className={styles.paragraph}>Contact us at contact@iseeyoufeel.com with your order number. We will provide return instructions and a return address.</p>
        <h2 className={styles.sectionTitle}>Return Shipping</h2>
        <p className={styles.paragraph}>Return shipping costs are the responsibility of the customer unless the item is defective.</p>
        <h2 className={styles.sectionTitle}>Refunds</h2>
        <p className={styles.paragraph}>Refunds are processed within 5&ndash;7 business days after we receive your return. The refund will be credited to your original payment method.</p>
        <h2 className={styles.sectionTitle}>Defective Items</h2>
        <p className={styles.paragraph}>If you receive a defective item, contact us within 48 hours with photos. We will send a free replacement.</p>
      </main>
      <Footer />
      <Navigation />
    </div>
  );
}
