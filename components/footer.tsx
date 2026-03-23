import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topContent}>
        <div className={styles.brandColumn}>
          <Link href="/">
            <div className={styles.logo}>
              <img className={styles.logoImg} alt="Skin—Clinic" src="/Logo.svg" />
            </div>
          </Link>
          <div className={styles.socialLinks}>
            <Image className={styles.socialIcon} width={16} height={16} alt="Instagram" src="/Instagram.svg" />
            <Image className={styles.socialIcon} width={16} height={16} alt="Facebook" src="/Facebook.svg" />
            <Image className={styles.socialIcon} width={16} height={16} alt="Youtube" src="/Youtube.svg" />
          </div>
        </div>
        <div className={styles.column}>
          <span className={styles.columnTitle}>Products</span>
          <div className={styles.columnLinks}>
            <Link href="/shop" className={styles.columnLink}>Creams</Link>
            <Link href="/shop" className={styles.columnLink}>Serums</Link>
            <Link href="/shop" className={styles.columnLink}>Lotions</Link>
            <Link href="/shop" className={styles.columnLink}>Shop all</Link>
          </div>
        </div>
        <div className={styles.column}>
          <span className={styles.columnTitle}>Support</span>
          <div className={styles.columnLinks}>
            <Link href="/faq" className={styles.columnLink}>FAQs</Link>
            <span className={styles.columnLink}>Return policy</span>
            <span className={styles.columnLink}>Shipping policy</span>
            <span className={styles.columnLink}>Start a return</span>
          </div>
        </div>
        <div className={styles.column}>
          <span className={styles.columnTitle}>Company</span>
          <div className={styles.columnLinks}>
            <Link href="/our-story" className={styles.columnLink}>About us</Link>
            <Link href="/journal" className={styles.columnLink}>Journal</Link>
            <Link href="/contact" className={styles.columnLink}>Contact us</Link>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.bottomContent}>
        <span className={styles.copyright}>&copy; 2025 Skin—Clinic</span>
        <div className={styles.legalLinks}>
          <span className={styles.legalLink}>Terms of service</span>
          <span className={styles.legalLink}>Privacy policy</span>
          <span className={styles.legalLink}>Cookies settings</span>
        </div>
      </div>
    </footer>
  );
}
