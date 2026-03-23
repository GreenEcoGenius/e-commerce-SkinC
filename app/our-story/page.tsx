import Navigation from "../../components/Navigation";
import SubscribeSection from "../../components/SubscribeSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export default function OurStoryPage() {
  return (
    <div>
      <section className={styles.heroSection}>
        <img className={styles.heroImage} alt="" src="/Image-Wrapper@3x.png" />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroSubtitle}>Our Story</span>
          <h1 className={styles.heroTitle}>Beauty rooted in nature, backed by science</h1>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.storyText}>
          <h2 className={styles.storyTitle}>How it all began</h2>
          <p className={styles.storyParagraph}>
            We started with a simple belief: skincare should be honest. No hidden chemicals, no false promises — just pure, effective formulas that let your skin breathe and thrive.
          </p>
          <p className={styles.storyParagraph}>
            Our founders spent two years researching botanical ingredients from around the world, working with dermatologists to create a line that truly delivers results. Every product is crafted in small batches with sustainably sourced ingredients.
          </p>
        </div>
        <img className={styles.storyImage} alt="" src="/Image21@2x.png" />
      </section>

      <section className={styles.valuesSection}>
        <h2 className={styles.valuesTitle}>What we stand for</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <span className={styles.valueNumber}>01</span>
            <h3 className={styles.valueTitle}>Clean ingredients</h3>
            <p className={styles.valueDescription}>
              We carefully select every ingredient. No parabens, sulfates, or synthetic fragrances — ever.
            </p>
          </div>
          <div className={styles.valueCard}>
            <span className={styles.valueNumber}>02</span>
            <h3 className={styles.valueTitle}>Sustainability</h3>
            <p className={styles.valueDescription}>
              From recyclable packaging to carbon-neutral shipping, we are committed to reducing our footprint.
            </p>
          </div>
          <div className={styles.valueCard}>
            <span className={styles.valueNumber}>03</span>
            <h3 className={styles.valueTitle}>Cruelty free</h3>
            <p className={styles.valueDescription}>
              None of our products are tested on animals. We believe beauty should never come at a cost to another living being.
            </p>
          </div>
        </div>
      </section>

      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
