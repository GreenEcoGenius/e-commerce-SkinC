import Link from "next/link";
import Navigation from "../../components/Navigation";
import Badge from "../../components/Badge";
import SubscribeSection from "../../components/SubscribeSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export default function JournalPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.pageTitle}>Journal</h1>

        <Link href="/journal/tips-natural-skincare-routine" className={styles.featuredArticle}>
          <img className={styles.featuredImage} alt="" src="/Image8@2x.png" />
          <div className={styles.featuredContent}>
            <div className={styles.featuredBadges}>
              <Badge text="Tips" variant="gray" />
              <Badge text="Guide" variant="gray" />
            </div>
            <h2 className={styles.featuredTitle}>Tips for building a natural skincare routine that lasts</h2>
            <p className={styles.featuredExcerpt}>
              Discover how to create a simple, effective routine using natural ingredients that nurture your skin day after day. We break down each step from cleanser to sunscreen.
            </p>
            <span className={styles.featuredLink}>Read more</span>
          </div>
        </Link>

        <div className={styles.articlesGrid}>
          <Link href="/journal/science-behind-face-masks" className={styles.article}>
            <img className={styles.articleImage} alt="" src="/Image3@2x.png" />
            <div className={styles.articleBadges}>
              <Badge text="Science" variant="gray" />
            </div>
            <h3 className={styles.articleTitle}>Science behind effective face masks</h3>
            <span className={styles.articleLink}>Read more</span>
          </Link>
          <Link href="/journal/ingredients-glowing-skin" className={styles.article}>
            <img className={styles.articleImage} alt="" src="/Image9@2x.png" />
            <div className={styles.articleBadges}>
              <Badge text="Guide" variant="gray" />
              <Badge text="Insight" variant="gray" />
            </div>
            <h3 className={styles.articleTitle}>Ingredients for glowing skin explained</h3>
            <span className={styles.articleLink}>Read more</span>
          </Link>
          <Link href="/journal/tips-natural-skincare-routine" className={styles.article}>
            <img className={styles.articleImage} alt="" src="/Image34@2x.png" />
            <div className={styles.articleBadges}>
              <Badge text="Wellness" variant="gray" />
            </div>
            <h3 className={styles.articleTitle}>How hydration transforms your complexion</h3>
            <span className={styles.articleLink}>Read more</span>
          </Link>
        </div>
      </main>
      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
