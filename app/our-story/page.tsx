import Navigation from "../../components/Navigation";
import InstagramSection from "../../components/InstagramSection";
import SubscribeSection from "../../components/SubscribeSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export default function OurStoryPage() {
  return (
    <div className={styles.page}>
      <section className={styles.heroWrapper}>
        <div className={styles.hero}>
          <img className={styles.heroImage} alt="" src="/Image-Wrapper3@3x.png" />
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.heroSubtitle}>Our story</span>
              <h1 className={styles.heroTitle}>Nature&apos;s finest for your skin</h1>
              <p className={styles.heroDescription}>
                I SEE, YOU FEEL was born from a passion for natural skincare that truly works. We believe in harnessing the power of nature to create products that nurture and restore your skin&apos;s natural beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.splitContainer}>
          <div className={styles.splitImageWrap}>
            <img className={styles.splitImage} alt="" src="/Image56@2x.png" />
          </div>
          <div className={styles.splitTextWrap}>
            <div className={styles.splitTextInner}>
              <span className={styles.splitSubtitle}>Pure ingredients, pure results</span>
              <h2 className={styles.splitTitle}>What sets us apart</h2>
              <p className={styles.splitDescription}>
                At I SEE, YOU FEEL, we prioritize quality with every product. We source the finest natural ingredients, blending them into gentle yet powerful formulas. Our commitment to sustainability and transparency ensures that every bottle reflects our dedication to your skin and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.splitContainer}>
          <div className={styles.splitTextWrap}>
            <div className={styles.splitTextInner}>
              <span className={styles.splitSubtitle}>Glow with confidence</span>
              <h2 className={styles.splitTitle}>Our promise to you</h2>
              <p className={styles.splitDescription}>
                We&apos;re here to help you embrace your skin&apos;s natural radiance. We promise to deliver skincare that&apos;s safe, effective, and tailored for all skin types. With every use, we aim to bring you closer to the healthy, glowing complexion you deserve.
              </p>
            </div>
          </div>
          <div className={styles.splitImageWrap}>
            <img className={styles.splitImage} alt="" src="/Image34@2x.png" />
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.gridContainer}>
          <div className={styles.gridCard}>
            <img className={styles.gridCardImage} alt="" src="/Image5@3x.png" />
            <div className={styles.gridCardText}>
              <h3 className={styles.gridCardTitle}>Our formulation process</h3>
              <p className={styles.gridCardDesc}>
                At I SEE, YOU FEEL, every product is developed with precision by our team of skincare experts. We blend science and nature, rigorously testing each formula to ensure it&apos;s gentle, effective, and safe. Our process guarantees that only the best reaches your skin, delivering real results you can trust.
              </p>
            </div>
          </div>
          <div className={styles.gridCard}>
            <img className={styles.gridCardImage} alt="" src="/Image7@3x.png" />
            <div className={styles.gridCardText}>
              <h3 className={styles.gridCardTitle}>Building a community of glow</h3>
              <p className={styles.gridCardDesc}>
                I SEE, YOU FEEL is more than a brand — it&apos;s a community. We listen to your needs, creating products that address real skin concerns with natural solutions. Join us on this journey to celebrate healthy skin, share tips, and inspire each other to glow confidently every day.
              </p>
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
