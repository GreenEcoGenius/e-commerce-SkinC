import type { NextPage } from "next";
import styles from "./header2.module.css";

export type Header2Type = {
  className?: string;
};

const Header2: NextPage<Header2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.pdp}>PDP</div>
    </div>
  );
};

export default Header2;
