import type { NextPage } from "next";
import { type CSSProperties } from "react";
import SkinClinicLogo5 from "./skin-clinic-logo4";
import styles from "./global-navigation-desktop4.module.css";

export type GlobalNavigationDesktop5Type = {
  className?: string;
  color?: CSSProperties["color"];

  /** Variant props */
  type?: CSSProperties["type"];
};

const GlobalNavigationDesktop5: NextPage<GlobalNavigationDesktop5Type> = ({
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
        <div className={styles.shop}>Shop</div>
        <div className={styles.aboutUs}>About us</div>
        <div className={styles.journal}>Journal</div>
      </nav>
      <SkinClinicLogo5 color={color} />
      <nav className={styles.leftLinks2}>
        <div className={styles.account}>Account</div>
        <div className={styles.search}>Search</div>
        <a
          className={styles.bag0}
          href="https://www.figma.com/design/XfNVMn9MjuEwh4RiYjLxM6?node-id=69-11395"
          target="_blank"
        >
          Bag (0)
        </a>
      </nav>
    </header>
  );
};

export default GlobalNavigationDesktop5;