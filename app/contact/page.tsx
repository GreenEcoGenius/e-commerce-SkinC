import Navigation from "../../components/Navigation";
import Button from "../../components/Button";
import InstagramSection from "../../components/InstagramSection";
import SubscribeSection from "../../components/SubscribeSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <img className={styles.heroImage} alt="" src="/Image-Wrapper3@3x.png" />
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroTitle}>Contact us</h1>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoGrid}>
          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Customer care</span>
            <div className={styles.infoItem}>
              <span className={styles.infoItemLabel}>Customer service</span>
              <span className={styles.infoItemValue}>support@iseeyoufeel.com</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoItemLabel}>For collaborations</span>
              <span className={styles.infoItemValue}>info@iseeyoufeel.com</span>
            </div>
          </div>
          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Customer service</span>
            <div className={styles.infoItem}>
              <span className={styles.infoItemLabel}>Phone number</span>
              <span className={styles.infoItemValue}>+1 222 333 4444</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoItemLabel}>Working hours</span>
              <span className={styles.infoItemValue}>Monday - Friday<br />9am - 5pm</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <span className={styles.formLabel}>General inquiry</span>
        <form className={styles.form}>
          <div className={styles.formRow}>
            <input className={styles.input} type="text" placeholder="First name" />
            <input className={styles.input} type="text" placeholder="Last name" />
          </div>
          <input className={styles.input} type="email" placeholder="Email address" />
          <textarea className={styles.textarea} placeholder="Your message" />
          <Button label="Submit" variant="dark" />
        </form>
      </section>

      <InstagramSection />
      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
