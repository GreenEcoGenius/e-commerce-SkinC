import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header className={styles.nav}>
      <nav className={styles.links}>
        <Link href="/shop" className={styles.link}>Shop</Link>
        <Link href="/our-story" className={styles.link}>About us</Link>
        <Link href="/journal" className={styles.link}>Journal</Link>
      </nav>
      <Link href="/" className={styles.logoLink}>
        <div className={styles.logo}>
          <img className={styles.logoImg} alt="I SEE, YOU FEEL" src="/Logo.svg" />
        </div>
      </Link>
      <nav className={styles.linksRight}>
        <Link href="/account" className={styles.link}>Account</Link>
        <span className={styles.link}>Search</span>
        <Link href="/cart" className={styles.link}>Bag (0)</Link>
      </nav>
    </header>
  );
}
