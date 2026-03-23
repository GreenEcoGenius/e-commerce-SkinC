import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styles from "../legal.module.css";

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.paragraph}>These terms govern your use of iseeyoufeel.com, operated by GreenEcoGenius O&Uuml;, Tornimäe tn 5, Kesklinna linnaosa, 10145 Tallinn, Estonia (Registry code: 16917315).</p>
        <h2 className={styles.sectionTitle}>Products &amp; Pricing</h2>
        <p className={styles.paragraph}>All prices are in EUR (&euro;) and include VAT where applicable. We reserve the right to modify prices without notice. Product images are for illustration purposes.</p>
        <h2 className={styles.sectionTitle}>Orders</h2>
        <p className={styles.paragraph}>By placing an order, you confirm that all information provided is accurate. Orders can be cancelled within 2 hours of placement.</p>
        <h2 className={styles.sectionTitle}>Payment</h2>
        <p className={styles.paragraph}>We accept Visa, Mastercard, PayPal, Apple Pay, Google Pay, and Klarna. All transactions are processed securely.</p>
        <h2 className={styles.sectionTitle}>Intellectual Property</h2>
        <p className={styles.paragraph}>All content, designs, and branding on this website are the property of GreenEcoGenius O&Uuml; and may not be reproduced without written permission.</p>
        <h2 className={styles.sectionTitle}>Governing Law</h2>
        <p className={styles.paragraph}>These terms are governed by the laws of the Republic of Estonia. Any disputes shall be resolved in the courts of Tallinn, Estonia.</p>
      </main>
      <Footer />
      <Navigation />
    </div>
  );
}
