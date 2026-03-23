import EmailInput from "./EmailInput";
import styles from "./SubscribeSection.module.css";

export default function SubscribeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <img className={styles.bgImage} alt="" src="/Image-Wrapper@3x.png" />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Subscribe for exclusive deals</h2>
        <p className={styles.description}>
          Get exclusive access to the latest natural skincare deals and tips delivered straight to your inbox!
        </p>
        <EmailInput />
      </div>
    </section>
  );
}
