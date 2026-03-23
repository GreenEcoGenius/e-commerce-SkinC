import type { NextPage } from "next";
import { type CSSProperties } from "react";
import TopContent4 from "./top-content1";
import styles from "./footer1.module.css";

export type Footer4Type = {
  className?: string;
  color?: CSSProperties["color"];

  /** Variant props */
  mobile?: CSSProperties["mobile"];
};

const Footer4: NextPage<Footer4Type> = ({
  className = "",
  mobile = false,
  color,
}) => {
  return (
    <footer
      className={[styles.footer, className].join(" ")}
      data-mobile={mobile}
    >
      <TopContent4 color="Dark" />
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

export default Footer4;
