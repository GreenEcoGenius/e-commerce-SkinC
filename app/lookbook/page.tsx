import Navigation from "../../components/Navigation";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const looks = [
  {
    src: "/lookbook-1.jpg",
    alt: "ISYF Premium — Cream knit sweater & black trousers",
    caption: "ISYF PREMIUM — AW26",
    span: "wide",
  },
  {
    src: "/lookbook-2.jpg",
    alt: "ISYF — Black embroidered hoodie, urban setting",
    caption: "FEEL SOMETHING",
    span: "tall",
  },
  {
    src: "/lookbook-3.jpg",
    alt: "ISYF FEELS — Message tee & washed hoodie duo",
    caption: "STILL HERE",
    span: "normal",
  },
  {
    src: "/lookbook-4.jpg",
    alt: "ISYF — Sand tee & black trousers in European alley",
    caption: "WEAR WHAT YOU FEEL",
    span: "normal",
  },
  {
    src: "/lookbook-5.jpg",
    alt: "ISYF — Full outfit flat lay with embroidered hoodie",
    caption: "THE ESSENTIALS",
    span: "normal",
  },
  {
    src: "/lookbook-6.jpg",
    alt: "ISYF — Rooftop silhouette at sunset",
    caption: "I SEE, YOU FEEL.",
    span: "full",
  },
];

export default function LookbookPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.heroLabel}>SS26 COLLECTION</span>
        <h1 className={styles.heroTitle}>LOOKBOOK</h1>
        <p className={styles.heroSubtitle}>See the vision. Feel the collection.</p>
      </section>

      <section className={styles.grid}>
        {looks.map((look, i) => (
          <div
            key={i}
            className={`${styles.gridItem} ${
              look.span === "wide" ? styles.wide :
              look.span === "tall" ? styles.tall :
              look.span === "full" ? styles.full : ""
            }`}
          >
            <img src={look.src} alt={look.alt} className={styles.gridImage} />
            <div className={styles.gridCaption}>
              <span>{look.caption}</span>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.quote}>
        <p className={styles.quoteText}>&ldquo;Every piece carries a feeling. Every look tells a story.&rdquo;</p>
      </section>

      <section className={styles.ctaSection}>
        <Button label="SHOP THE COLLECTION" variant="dark" href="/shop" />
      </section>

      <Footer />
      <Navigation />
    </div>
  );
}
