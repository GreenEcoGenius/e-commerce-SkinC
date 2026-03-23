import styles from "./InstagramSection.module.css";

const images = [
  "/insta-1.jpg",
  "/insta-2.jpg",
  "/insta-3.jpg",
  "/insta-4.jpg",
  "/insta-5.jpg",
];

export default function InstagramSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.subtitle}>Follow us on Instagram</span>
        <h2 className={styles.title}>@ISEEYOUFEEL</h2>
      </div>
      <div className={styles.grid}>
        {images.map((src, i) => (
          <div key={i} className={styles.imageWrapper}>
            <img className={styles.image} alt="" src={src} />
          </div>
        ))}
      </div>
    </section>
  );
}
