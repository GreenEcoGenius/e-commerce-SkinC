import type { NextPage } from "next";
import { type CSSProperties } from "react";
import TopContent5 from "./top-content21";
import styles from "./footer21.module.css";

export type Footer5Type = {
  className?: string;
  color?: CSSProperties["color"];

  /** Variant props */
  mobile?: boolean;
};

const Footer5: NextPage<Footer5Type> = ({
  className = "",
  mobile = false,
  color,
}) => {
  return (
    <footer
      className={[styles.footer, className].join(" ")}
      data-mobile={mobile}
    >
      <TopContent5 color="Dark" />
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

export default Footer5;
