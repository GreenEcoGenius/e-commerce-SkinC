import Navigation from "../../components/Navigation";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.pageTitle}>Contact us</h1>
        <p className={styles.subtitle}>
          Have a question or need help with an order? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you within 24 hours.
        </p>
        <div className={styles.layout}>
          <div className={styles.formSide}>
            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>First name</label>
                  <input className={styles.input} type="text" placeholder="Jane" />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Last name</label>
                  <input className={styles.input} type="text" placeholder="Doe" />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" placeholder="your@email.com" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Subject</label>
                <input className={styles.input} type="text" placeholder="How can we help?" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Message</label>
                <textarea className={styles.textarea} placeholder="Tell us more..." />
              </div>
              <Button label="Send message" variant="dark" />
            </form>
          </div>
          <aside className={styles.infoSide}>
            <div className={styles.infoBlock}>
              <span className={styles.infoTitle}>Email</span>
              <p className={styles.infoText}>hello@iseeyoufeel.com</p>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoTitle}>Phone</span>
              <p className={styles.infoText}>+1 (800) 123-4567</p>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoTitle}>Hours</span>
              <p className={styles.infoText}>Mon — Fri: 9am — 6pm EST<br />Sat — Sun: Closed</p>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoTitle}>Address</span>
              <p className={styles.infoText}>123 Beauty Lane<br />New York, NY 10001</p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
      <Navigation />
    </div>
  );
}
