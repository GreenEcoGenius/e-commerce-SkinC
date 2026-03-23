import Navigation from "../../components/Navigation";
import InstagramSection from "../../components/InstagramSection";
import SubscribeSection from "../../components/SubscribeSection";
import Footer from "../../components/Footer";
import styles from "../legal.module.css";

export default function TermsOfServicePage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.title}>Terms of service</h1>
        <p className={styles.paragraph}>By accessing and using our website, you agree to the following terms and conditions. Please read them carefully before making a purchase.</p>
        <h2 className={styles.sectionTitle}>General conditions</h2>
        <p className={styles.paragraph}>We reserve the right to refuse service to anyone for any reason at any time. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the service without express written permission.</p>
        <h2 className={styles.sectionTitle}>Products and pricing</h2>
        <p className={styles.paragraph}>All product descriptions, images, and prices are subject to change without notice. We make every effort to ensure accuracy but do not guarantee that all information is complete or error-free. We reserve the right to limit quantities of any products.</p>
        <h2 className={styles.sectionTitle}>Payment</h2>
        <p className={styles.paragraph}>We accept Visa, Mastercard, American Express, Discover, PayPal, and Apple Pay. All payments are processed securely through encrypted connections. You agree to provide current, complete, and accurate purchase and account information.</p>
        <h2 className={styles.sectionTitle}>User accounts</h2>
        <p className={styles.paragraph}>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
        <h2 className={styles.sectionTitle}>Limitation of liability</h2>
        <p className={styles.paragraph}>We shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our products or services.</p>
      </main>
      <InstagramSection />
      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
