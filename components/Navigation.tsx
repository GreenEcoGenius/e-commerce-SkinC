"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "../lib/supabase";
import SearchModal from "./SearchModal";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const supabase = createClient();
  const [searchOpen, setSearchOpen] = useState(false);
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

  return (
    <>
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
          <Link href="/account" className={styles.link}>
            {user ? "My account" : "Account"}
          </Link>
          <button className={styles.searchButton} onClick={() => setSearchOpen(true)}>
            Search
          </button>
          <Link href="/cart" className={styles.link}>Bag (0)</Link>
        </nav>
      </header>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
