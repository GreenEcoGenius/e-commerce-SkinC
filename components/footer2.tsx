import type { NextPage } from "next";
import { type CSSProperties } from "react";
import TopContent2 from "./top-content2";
import styles from "./footer2.module.css";

export type Footer2Type = {
  className?: string;
  color?: CSSProperties["color"];

  /** Variant props */
  mobile?: CSSProperties["mobile"];
};

const Footer2: NextPage<Footer2Type> = ({
  className = "",
  mobile = false,
  color,
}) => {
  return (
    <section
      className={[styles.footer, className].join(" ")}
      data-mobile={mobile}
    >
      <TopContent2 color="Dark" />
      <div className={styles.divider} />
      <div className={styles.bottomContent}>
        <div className={styles.skinclinic}>© 2025 Skin—Clinic</div>
        <div className={styles.legalLinks}>
          <div className={styles.termsOfService}>Terms of service</div>
          <div className={styles.privacyPolicy}>Privacy policy</div>
          <div className={styles.cookiesSettings}>Cookies settings</div>
        </div>
      </div>
    </section>
  );
};

export default Footer2;
