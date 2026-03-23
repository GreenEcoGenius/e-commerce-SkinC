import Navigation from "../../components/Navigation";
import Button from "../../components/Button";
import InstagramSection from "../../components/InstagramSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export default function OurStoryPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.heroSubtitle}>Our Story</span>
        <h1 className={styles.heroTitle}>I SEE, YOU FEEL.</h1>
      </section>

      <section className={styles.storySection}>
        <div className={styles.storyContent}>
          <h2 className={styles.storyTitle}>Timeless by design, born from emotion</h2>
          <p className={styles.storyText}>I SEE, YOU FEEL. was born in Tallinn, Estonia from a simple belief: fashion should make you feel something. Every piece we create carries a message, a mood, an emotion that connects the wearer to something deeper.</p>
          <p className={styles.storyText}>What started as a creative vision by GreenEcoGenius O&Uuml; has grown into a brand with two distinct collections &mdash; each speaking to a different side of self-expression.</p>
        </div>
      </section>

      <section className={styles.collectionsSection}>
        <div className={styles.collectionBlock}>
          <h3 className={styles.collectionName}>ISYF Premium</h3>
          <p className={styles.collectionDesc}>Embroidered essentials crafted with precision. Premium fabrics, minimal design, maximum impact. For those who speak through subtlety.</p>
        </div>
        <div className={styles.collectionBlock}>
          <h3 className={styles.collectionName}>ISYF FEELS</h3>
          <p className={styles.collectionDesc}>Message-driven streetwear that says what you feel. Bold graphics, expressive prints, unapologetic style. For those who wear their emotions.</p>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.valueCard}>
          <h3 className={styles.valueTitle}>Emotion-driven design</h3>
          <p className={styles.valueText}>Each piece tells a story. Our designs are born from real feelings and meaningful messages that resonate.</p>
        </div>
        <div className={styles.valueCard}>
          <h3 className={styles.valueTitle}>Eco-conscious</h3>
          <p className={styles.valueText}>We work with responsible suppliers and our print-on-demand model eliminates overproduction and waste.</p>
        </div>
        <div className={styles.valueCard}>
          <h3 className={styles.valueTitle}>Direct to you</h3>
          <p className={styles.valueText}>No middlemen. Premium quality at fair prices, shipped worldwide with free delivery over &euro;100.</p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <Button label="EXPLORE THE COLLECTIONS" variant="dark" href="/shop" />
      </section>

      <InstagramSection />
      <Footer />
      <Navigation />
    </div>
  );
}
