"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "../lib/supabase";
import { useCart } from "../lib/cart-context";
import SearchModal from "./SearchModal";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const supabase = createClient();
  const { cartCount } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<{ email?: string } | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  function closeMenu() { setMenuOpen(false); }

  return (
    <>
      <header className={styles.nav}>
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
        <nav className={styles.links}>
          <Link href="/shop?category=women" className={styles.link}>Women</Link>
          <Link href="/shop?category=men" className={styles.link}>Men</Link>
          <Link href="/shop?category=accessories" className={styles.link}>Accessories</Link>
          <Link href="/lookbook" className={styles.link}>Lookbook</Link>
          <Link href="/our-story" className={styles.link}>Our Story</Link>
        </nav>
        <Link href="/" className={styles.logoLink}>
          <span className={styles.logoText}>I SEE, YOU FEEL.</span>
        </Link>
        <nav className={styles.linksRight}>
          <Link href="/account" className={styles.link}>
            {user ? "Account" : "Sign in"}
          </Link>
          <button
            className={`${styles.link} ${styles.searchBtn} ${searchOpen ? styles.searchActive : ""}`}
            onClick={() => setSearchOpen(!searchOpen)}
          >
            Search
          </button>
          <Link href="/cart" className={styles.link}>Bag ({cartCount})</Link>
        </nav>
        <Link href="/cart" className={styles.mobileBag}>Bag ({cartCount})</Link>
        {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
        {menuOpen && (
          <nav className={styles.mobileMenu}>
            <Link href="/shop?category=women" className={styles.mobileLink} onClick={closeMenu}>Women</Link>
            <Link href="/shop?category=men" className={styles.mobileLink} onClick={closeMenu}>Men</Link>
            <Link href="/shop?category=accessories" className={styles.mobileLink} onClick={closeMenu}>Accessories</Link>
            <Link href="/lookbook" className={styles.mobileLink} onClick={closeMenu}>Lookbook</Link>
            <Link href="/our-story" className={styles.mobileLink} onClick={closeMenu}>Our Story</Link>
            <div className={styles.mobileDivider} />
            <Link href="/account" className={styles.mobileLink} onClick={closeMenu}>
              {user ? "My Account" : "Sign In"}
            </Link>
            <button className={styles.mobileLink} onClick={() => { closeMenu(); setSearchOpen(true); }}>
              Search
            </button>
          </nav>
        )}
      </header>
      {searchOpen && <div className={styles.overlay} onClick={() => setSearchOpen(false)} />}
      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </>
  );
}
