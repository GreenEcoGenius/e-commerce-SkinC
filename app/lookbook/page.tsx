import Navigation from "../../components/Navigation";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export default function LookbookPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Lookbook</h1>
        <p className={styles.heroSubtitle}>See the vision. Feel the collection.</p>
      </section>
      <section className={styles.grid}>
        <div className={styles.gridItem} style={{ gridColumn: "span 2", height: "500px", background: "var(--Gray-1)" }} />
        <div className={styles.gridItem} style={{ height: "500px", background: "#E8E6E3" }} />
        <div className={styles.gridItem} style={{ height: "400px", background: "#E8E6E3" }} />
        <div className={styles.gridItem} style={{ gridColumn: "span 2", height: "400px", background: "var(--Gray-1)" }} />
        <div className={styles.gridItem} style={{ gridColumn: "span 3", height: "500px", background: "var(--Black)" }} />
      </section>
      <section className={styles.ctaSection}>
        <Button label="SHOP THE COLLECTION" variant="dark" href="/shop" />
      </section>
      <Footer />
      <Navigation />
    </div>
  );
}
