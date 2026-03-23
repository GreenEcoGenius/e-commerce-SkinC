import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styles from "../legal.module.css";

export default function LegalNoticePage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.title}>Legal Notice</h1>
        <h2 className={styles.sectionTitle}>Company Information</h2>
        <p className={styles.paragraph}>
          <strong>GreenEcoGenius O&Uuml;</strong><br />
          Registry code: 16917315<br />
          Tornimäe tn 5, Kesklinna linnaosa<br />
          10145 Tallinn, Estonia
        </p>
        <h2 className={styles.sectionTitle}>Publication Director</h2>
        <p className={styles.paragraph}>Ervis Ago</p>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.paragraph}>Email: contact@iseeyoufeel.com</p>
        <h2 className={styles.sectionTitle}>Hosting</h2>
        <p className={styles.paragraph}>This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States.</p>
      </main>
      <Footer />
      <Navigation />
    </div>
  );
}
