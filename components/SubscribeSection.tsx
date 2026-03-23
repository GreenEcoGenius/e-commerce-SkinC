import styles from "./SubscribeSection.module.css";

export default function SubscribeSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>JOIN THE FEELING</h2>
      <p className={styles.description}>Subscribe to receive exclusive drops, early access, and stories from the ISYF universe.</p>
      <div className={styles.inputRow}>
        <input className={styles.field} placeholder="Enter your email" type="email" />
        <button className={styles.submit}>&rarr;</button>
      </div>
    </section>
  );
}
