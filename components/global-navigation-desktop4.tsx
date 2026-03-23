import type { NextPage } from "next";
import Link from "next/link";
import { type CSSProperties } from "react";
import SkinClinicLogo7 from "./skin-clinic-logo4";
import styles from "./global-navigation-desktop4.module.css";

export type GlobalNavigationDesktop7Type = {
  className?: string;
  color?: CSSProperties["color"];

  /** Variant props */
  type?: string;
};

const GlobalNavigationDesktop7: NextPage<GlobalNavigationDesktop7Type> = ({
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
      <SkinClinicLogo7 color={color} />
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

export default GlobalNavigationDesktop7;
