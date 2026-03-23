import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styles from "../legal.module.css";

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.paragraph}>GreenEcoGenius O&Uuml; (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR).</p>
        <h2 className={styles.sectionTitle}>Data We Collect</h2>
        <p className={styles.paragraph}>We collect your name, email, shipping address, and payment details when you make a purchase or create an account. We also use cookies for analytics.</p>
        <h2 className={styles.sectionTitle}>How We Use Your Data</h2>
        <ul className={styles.list}>
          <li>To process and fulfill your orders</li>
          <li>To communicate about your account and orders</li>
          <li>To send marketing emails (with your consent)</li>
          <li>To improve our website and services</li>
        </ul>
        <h2 className={styles.sectionTitle}>Your Rights</h2>
        <p className={styles.paragraph}>Under GDPR, you have the right to access, correct, delete, or port your personal data. Contact contact@iseeyoufeel.com to exercise these rights.</p>
        <h2 className={styles.sectionTitle}>Data Sharing</h2>
        <p className={styles.paragraph}>We do not sell your data. We share it only with payment processors and shipping providers necessary to fulfill your order.</p>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.paragraph}>GreenEcoGenius O&Uuml;, Tornimäe tn 5, 10145 Tallinn, Estonia. Email: contact@iseeyoufeel.com</p>
      </main>
      <Footer />
      <Navigation />
    </div>
  );
}
