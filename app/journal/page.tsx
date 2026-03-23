import Link from "next/link";
import Navigation from "../../components/Navigation";
import InstagramSection from "../../components/InstagramSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export default function JournalPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.pageTitle}>Journal</h1>
        <div className={styles.articlesGrid}>
          <Link href="/journal/story-behind-isyf" className={styles.article}>
            <div className={styles.articleImage} style={{ background: "var(--Gray-1)" }} />
            <span className={styles.articleLabel}>Brand</span>
            <h3 className={styles.articleTitle}>The story behind ISYF</h3>
            <span className={styles.articleLink}>Read more &rarr;</span>
          </Link>
          <Link href="/journal/fashion-should-feel" className={styles.article}>
            <div className={styles.articleImage} style={{ background: "#E8E6E3" }} />
            <span className={styles.articleLabel}>Perspective</span>
            <h3 className={styles.articleTitle}>Why fashion should make you feel something</h3>
            <span className={styles.articleLink}>Read more &rarr;</span>
          </Link>
          <Link href="/journal/eco-conscious-approach" className={styles.article}>
            <div className={styles.articleImage} style={{ background: "var(--Gray-1)" }} />
            <span className={styles.articleLabel}>Sustainability</span>
            <h3 className={styles.articleTitle}>Our eco-conscious approach</h3>
            <span className={styles.articleLink}>Read more &rarr;</span>
          </Link>
        </div>
      </main>
      <InstagramSection />
      <Footer />
      <Navigation />
    </div>
  );
}
