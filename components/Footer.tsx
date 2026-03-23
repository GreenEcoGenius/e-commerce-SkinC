import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topContent}>
        <div className={styles.brandColumn}>
          <Link href="/" className={styles.logoText}>I SEE, YOU FEEL.</Link>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com/iseeyoufeel" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
            <a href="https://tiktok.com/@iseeyoufeel" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>TikTok</a>
          </div>
        </div>
        <div className={styles.column}>
          <span className={styles.columnTitle}>Shop</span>
          <div className={styles.columnLinks}>
            <Link href="/shop?category=women" className={styles.columnLink}>Women</Link>
            <Link href="/shop?category=men" className={styles.columnLink}>Men</Link>
            <Link href="/shop?category=accessories" className={styles.columnLink}>Accessories</Link>
            <Link href="/shop" className={styles.columnLink}>New Arrivals</Link>
          </div>
        </div>
        <div className={styles.column}>
          <span className={styles.columnTitle}>Support</span>
          <div className={styles.columnLinks}>
            <Link href="/faq" className={styles.columnLink}>FAQ</Link>
            <Link href="/shipping-policy" className={styles.columnLink}>Shipping & Returns</Link>
            <Link href="/size-guide" className={styles.columnLink}>Size Guide</Link>
            <Link href="/contact" className={styles.columnLink}>Contact</Link>
          </div>
        </div>
        <div className={styles.column}>
          <span className={styles.columnTitle}>Company</span>
          <div className={styles.columnLinks}>
            <Link href="/our-story" className={styles.columnLink}>Our Story</Link>
            <Link href="/lookbook" className={styles.columnLink}>Lookbook</Link>
            <Link href="/legal" className={styles.columnLink}>Legal Notice</Link>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.bottomContent}>
        <span className={styles.copyright}>&copy; 2026 I SEE, YOU FEEL. &mdash; GreenEcoGenius O&Uuml;</span>
        <div className={styles.legalLinks}>
          <Link href="/terms-of-service" className={styles.legalLink}>Terms of service</Link>
          <Link href="/privacy-policy" className={styles.legalLink}>Privacy policy</Link>
          <span className={styles.legalLink}>Cookies settings</span>
        </div>
      </div>
    </footer>
  );
}
