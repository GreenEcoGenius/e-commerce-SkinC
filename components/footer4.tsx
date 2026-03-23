import type { NextPage } from "next";
import { type CSSProperties } from "react";
import TopContent7 from "./top-content4";
import styles from "./footer4.module.css";

export type Footer7Type = {
  className?: string;
  color?: CSSProperties["color"];

  /** Variant props */
  mobile?: CSSProperties["mobile"];
};

const Footer7: NextPage<Footer7Type> = ({
  className = "",
  mobile = false,
  color,
}) => {
  return (
    <footer
      className={[styles.footer, className].join(" ")}
      data-mobile={mobile}
    >
      <TopContent7 color="Dark" />
      <div className={styles.divider} />
      <div className={styles.bottomContent}>
        <div className={styles.skinclinic}>© 2025 Skin—Clinic</div>
        <div className={styles.legalLinks}>
          <div className={styles.termsOfService}>Terms of service</div>
          <div className={styles.privacyPolicy}>Privacy policy</div>
          <div className={styles.cookiesSettings}>Cookies settings</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer7;
