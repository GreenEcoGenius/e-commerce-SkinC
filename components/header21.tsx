import type { NextPage } from "next";
import styles from "./header21.module.css";

export type Header10Type = {
  className?: string;
};

const Header10: NextPage<Header10Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.pdp}>PDP</div>
    </div>
  );
};

export default Header10;
