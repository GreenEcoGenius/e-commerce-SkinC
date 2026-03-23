import Navigation from "../../components/Navigation";
import Button from "../../components/Button";
import InstagramSection from "../../components/InstagramSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.title}>Get in touch</h1>
        <p className={styles.subtitle}>Whether you have a question about sizing, shipping, or just want to say hello &mdash; reach out.</p>
        <div className={styles.layout}>
          <div className={styles.infoSide}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>contact@iseeyoufeel.com</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Instagram</span>
              <span className={styles.infoValue}>@iseeyoufeel</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>TikTok</span>
              <span className={styles.infoValue}>@iseeyoufeel</span>
            </div>
          </div>
          <form className={styles.form}>
            <input className={styles.input} type="text" placeholder="Name" />
            <input className={styles.input} type="email" placeholder="Email" />
            <textarea className={styles.textarea} placeholder="Your message" />
            <Button label="SEND MESSAGE" variant="dark" />
          </form>
        </div>
      </main>
      <InstagramSection />
      <Footer />
      <Navigation />
    </div>
  );
}
