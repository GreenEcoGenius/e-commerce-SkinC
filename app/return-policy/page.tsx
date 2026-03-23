import Navigation from "../../components/Navigation";
import InstagramSection from "../../components/InstagramSection";
import SubscribeSection from "../../components/SubscribeSection";
import Footer from "../../components/Footer";
import styles from "../legal.module.css";

export default function ReturnPolicyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.title}>Return policy</h1>
        <p className={styles.paragraph}>We want you to be completely satisfied with your purchase. If for any reason you are not happy, we offer a straightforward return process.</p>
        <h2 className={styles.sectionTitle}>30-day return window</h2>
        <p className={styles.paragraph}>You may return most items within 30 days of delivery for a full refund. Products must be unused, in their original packaging, and in the same condition as when you received them.</p>
        <h2 className={styles.sectionTitle}>How to initiate a return</h2>
        <ul className={styles.list}>
          <li>Contact our customer service team at support@iseeyoufeel.com</li>
          <li>Include your order number and reason for return</li>
          <li>We will provide a prepaid return shipping label</li>
          <li>Pack the item securely and drop it off at your nearest shipping location</li>
        </ul>
        <h2 className={styles.sectionTitle}>Refunds</h2>
        <p className={styles.paragraph}>Once we receive your return, we will inspect the item and process your refund within 5–7 business days. Refunds will be credited to your original payment method.</p>
        <h2 className={styles.sectionTitle}>Exchanges</h2>
        <p className={styles.paragraph}>If you would like to exchange an item for a different size or product, please contact us. We will help facilitate the exchange as quickly as possible.</p>
        <h2 className={styles.sectionTitle}>Damaged or defective items</h2>
        <p className={styles.paragraph}>If you receive a damaged or defective product, please contact us within 48 hours of delivery with photos. We will send a replacement at no additional cost.</p>
      </main>
      <InstagramSection />
      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
