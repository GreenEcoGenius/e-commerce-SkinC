import styles from "./InstagramSection.module.css";

const images = [
  "/Instagram-Image@2x.png",
  "/Instagram-Image4@2x.png",
  "/Instagram-Image1@2x.png",
  "/Instagram-Image3@2x.png",
  "/Instagram-Image2@2x.png",
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
