import type { NextPage } from "next";
import Link from "next/link";
import { type CSSProperties } from "react";
import SkinClinicLogo2 from "./skin-clinic-logo2";
import styles from "./global-navigation-desktop2.module.css";

export type GlobalNavigationDesktop2Type = {
  className?: string;
  color?: CSSProperties["color"];

  /** Variant props */
  type?: string;
};

const GlobalNavigationDesktop2: NextPage<GlobalNavigationDesktop2Type> = ({
  className = "",
  type = "Default",
  color,
}) => {
  return (
    <header
      className={[styles.globalNavigationDesktop, className].join(" ")}
      data-type={type}
    >
      <nav className={styles.leftLinks}>
        <Link href="/shop" className={styles.shop}>Shop</Link>
        <Link href="/our-story" className={styles.aboutUs}>About us</Link>
        <Link href="/journal" className={styles.journal}>Journal</Link>
      </nav>
      <Link href="/"><SkinClinicLogo2 color={color} /></Link>
      <nav className={styles.leftLinks2}>
        <Link href="/account" className={styles.account}>Account</Link>
        <div className={styles.search}>Search</div>
        <Link href="/cart" className={styles.bag0}>
          Bag (0)
        </Link>
      </nav>
    </header>
  );
};

export default GlobalNavigationDesktop2;
