import Navigation from "../../components/Navigation";
import InstagramSection from "../../components/InstagramSection";
import SubscribeSection from "../../components/SubscribeSection";
import Footer from "../../components/Footer";
import styles from "../legal.module.css";

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.title}>Privacy policy</h1>
        <p className={styles.paragraph}>Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our website and services.</p>
        <h2 className={styles.sectionTitle}>Information we collect</h2>
        <p className={styles.paragraph}>We collect information you provide directly, such as your name, email address, shipping address, and payment details when you make a purchase or create an account. We also collect usage data through cookies and analytics tools.</p>
        <h2 className={styles.sectionTitle}>How we use your information</h2>
        <ul className={styles.list}>
          <li>To process and fulfill your orders</li>
          <li>To communicate with you about your account and orders</li>
          <li>To send promotional emails (with your consent)</li>
          <li>To improve our website and services</li>
          <li>To prevent fraud and maintain security</li>
        </ul>
        <h2 className={styles.sectionTitle}>Data sharing</h2>
        <p className={styles.paragraph}>We do not sell your personal information. We may share your data with trusted service providers who assist us in operating our website, processing payments, and delivering orders.</p>
        <h2 className={styles.sectionTitle}>Cookies</h2>
        <p className={styles.paragraph}>We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences in your browser settings.</p>
        <h2 className={styles.sectionTitle}>Your rights</h2>
        <p className={styles.paragraph}>You have the right to access, correct, or delete your personal data at any time. Contact us at support@iseeyoufeel.com to exercise these rights.</p>
      </main>
      <InstagramSection />
      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
