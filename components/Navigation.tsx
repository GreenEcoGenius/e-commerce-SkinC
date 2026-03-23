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

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className={styles.nav}>
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
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
          <Link href="/account" className={styles.link}>
            {user ? "My account" : "Account"}
          </Link>
          <button
            className={`${styles.searchButton} ${searchOpen ? styles.searchActive : ""}`}
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
            <Link href="/shop" className={styles.link} onClick={closeMenu}>Shop</Link>
            <Link href="/our-story" className={styles.link} onClick={closeMenu}>About us</Link>
            <Link href="/journal" className={styles.link} onClick={closeMenu}>Journal</Link>
            <Link href="/account" className={styles.link} onClick={closeMenu}>
              {user ? "My account" : "Account"}
            </Link>
            <button className={styles.searchButton} onClick={() => { closeMenu(); setSearchOpen(true); }}>
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
