import Navigation from "../../components/Navigation";
import InstagramSection from "../../components/InstagramSection";
import SubscribeSection from "../../components/SubscribeSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export default function OurStoryPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <img className={styles.heroImage} alt="" src="/Image-Wrapper3@3x.png" />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroSubtitle}>Our Story</span>
          <h1 className={styles.heroTitle}>Nature&apos;s finest for your skin</h1>
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.splitContainer}>
          <img className={styles.splitImage} alt="" src="/Image56@2x.png" />
          <div className={styles.splitText}>
            <span className={styles.splitSubtitle}>Pure ingredients, pure results</span>
            <h2 className={styles.splitTitle}>What sets us apart</h2>
            <p className={styles.splitDescription}>
              At I SEE, YOU FEEL, we prioritize quality with every product. We source the finest natural ingredients, blending them into gentle yet powerful formulas. Our commitment to sustainability and transparency ensures that every bottle reflects our dedication to your skin and the planet.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={`${styles.splitContainer} ${styles.splitReverse}`}>
          <div className={styles.splitText}>
            <span className={styles.splitSubtitle}>Glow with confidence</span>
            <h2 className={styles.splitTitle}>Our promise to you</h2>
            <p className={styles.splitDescription}>
              We&apos;re here to help you embrace your skin&apos;s natural radiance. We promise to deliver skincare that&apos;s safe, effective, and tailored for all skin types. With every use, we aim to bring you closer to the healthy, glowing complexion you deserve.
            </p>
          </div>
          <img className={styles.splitImage} alt="" src="/Image34@2x.png" />
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.gridContainer}>
          <div className={styles.gridCard}>
            <img className={styles.gridCardImage} alt="" src="/Image5@3x.png" />
            <div className={styles.gridCardOverlay} />
            <div className={styles.gridCardContent}>
              <h3 className={styles.gridCardTitle}>Our formulation process</h3>
              <p className={styles.gridCardDesc}>Every product undergoes rigorous development with dermatologists to ensure safety, efficacy, and the perfect balance of natural ingredients.</p>
            </div>
          </div>
          <div className={styles.gridCard}>
            <img className={styles.gridCardImage} alt="" src="/Image7@3x.png" />
            <div className={styles.gridCardOverlay} />
            <div className={styles.gridCardContent}>
              <h3 className={styles.gridCardTitle}>Building a community of glow</h3>
              <p className={styles.gridCardDesc}>Join thousands who have transformed their skincare routines. Share your glow story and inspire others on their journey to radiant skin.</p>
            </div>
          </div>
        </div>
      </section>

      <InstagramSection />
      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
