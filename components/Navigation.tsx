"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "../lib/supabase";
import { useCart } from "../lib/cart-context";
import SearchModal from "./SearchModal";
import styles from "./Navigation.module.css";

const menuData = [
  {
    label: "Women",
    sections: [
      { title: "ISYF Premium", links: [
        { label: "Sweats & Hoodies", href: "/shop?category=women&collection=premium&type=sweats" },
        { label: "T-shirts", href: "/shop?category=women&collection=premium&type=tshirts" },
        { label: "Limited Drops", href: "/shop?category=women&collection=premium&type=limited" },
      ]},
      { title: "ISYF FEELS", links: [
        { label: "T-shirts à message", href: "/shop?category=women&collection=feels&type=tshirts" },
        { label: "Sweats imprimés", href: "/shop?category=women&collection=feels&type=sweats" },
        { label: "New Arrivals", href: "/shop?category=women&collection=feels&type=new" },
      ]},
      { title: "", links: [
        { label: "Shop All Women", href: "/shop?category=women" },
      ]},
    ],
  },
  {
    label: "Men",
    sections: [
      { title: "ISYF Premium", links: [
        { label: "Sweats & Hoodies", href: "/shop?category=men&collection=premium&type=sweats" },
        { label: "T-shirts", href: "/shop?category=men&collection=premium&type=tshirts" },
        { label: "Limited Drops", href: "/shop?category=men&collection=premium&type=limited" },
      ]},
      { title: "ISYF FEELS", links: [
        { label: "T-shirts à message", href: "/shop?category=men&collection=feels&type=tshirts" },
        { label: "Sweats imprimés", href: "/shop?category=men&collection=feels&type=sweats" },
        { label: "New Arrivals", href: "/shop?category=men&collection=feels&type=new" },
      ]},
      { title: "", links: [
        { label: "Shop All Men", href: "/shop?category=men" },
      ]},
    ],
  },
];

export default function Navigation() {
  const supabase = createClient();
  const { cartCount } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [user, setUser] = useState<{ email?: string } | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_ev, session) => setUser(session?.user ?? null));
    return () => subscription.unsubscribe();
  }, []);

  function closeAll() { setMenuOpen(false); setActiveMenu(null); setMobileExpanded(null); }

  return (
    <>
      <header className={styles.nav}>
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        <nav className={styles.links}>
          {menuData.map((item) => (
            <div
              key={item.label}
              className={styles.menuItem}
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link href={`/shop?category=${item.label.toLowerCase()}`} className={styles.link}>{item.label}</Link>
              {activeMenu === item.label && (
                <div className={styles.megaMenu}>
                  {item.sections.map((sec, i) => (
                    <div key={i} className={styles.megaCol}>
                      {sec.title && <span className={styles.megaTitle}>{sec.title}</span>}
                      {sec.links.map((l) => (
                        <Link key={l.href} href={l.href} className={sec.title ? styles.megaLink : styles.megaLinkBold} onClick={() => setActiveMenu(null)}>{l.label}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/shop?category=accessories" className={styles.link}>Accessories</Link>
          <Link href="/shop?category=rituals" className={styles.link}>Rituals</Link>
          <Link href="/lookbook" className={styles.link}>Lookbook</Link>
          <Link href="/our-story" className={styles.link}>Our Story</Link>
        </nav>

        <Link href="/" className={styles.logoLink}>
          <span className={styles.logoText}>I SEE, YOU FEEL.</span>
        </Link>

        <nav className={styles.linksRight}>
          <Link href="/account" className={styles.link}>{user ? "Account" : "Sign in"}</Link>
          <button className={`${styles.link} ${styles.searchBtn}`} onClick={() => setSearchOpen(!searchOpen)}>Search</button>
          <Link href="/cart" className={styles.link}>Bag ({cartCount})</Link>
        </nav>

        <Link href="/cart" className={styles.mobileBag}>Bag ({cartCount})</Link>

        {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}

        {menuOpen && (
          <nav className={styles.mobileMenu}>
            {menuData.map((item) => (
              <div key={item.label} className={styles.mobileGroup}>
                <button className={styles.mobileGroupBtn} onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}>
                  {item.label}
                  <span>{mobileExpanded === item.label ? "−" : "+"}</span>
                </button>
                {mobileExpanded === item.label && (
                  <div className={styles.mobileSubMenu}>
                    {item.sections.map((sec, i) => (
                      <div key={i} className={styles.mobileSubGroup}>
                        {sec.title && <span className={styles.mobileSubTitle}>{sec.title}</span>}
                        {sec.links.map((l) => (
                          <Link key={l.href} href={l.href} className={styles.mobileSubLink} onClick={closeAll}>{l.label}</Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/shop?category=accessories" className={styles.mobileLink} onClick={closeAll}>Accessories</Link>
            <Link href="/shop?category=rituals" className={styles.mobileLink} onClick={closeAll}>Rituals</Link>
            <Link href="/lookbook" className={styles.mobileLink} onClick={closeAll}>Lookbook</Link>
            <Link href="/our-story" className={styles.mobileLink} onClick={closeAll}>Our Story</Link>
            <div className={styles.mobileDivider} />
            <Link href="/account" className={styles.mobileLink} onClick={closeAll}>{user ? "My Account" : "Sign In"}</Link>
          </nav>
        )}
      </header>
      {searchOpen && <div className={styles.overlay} onClick={() => setSearchOpen(false)} />}
      {menuOpen && <div className={styles.overlay} onClick={closeAll} />}
    </>
  );
}
