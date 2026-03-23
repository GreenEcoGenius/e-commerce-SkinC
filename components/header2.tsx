import type { NextPage } from "next";
import styles from "./header2.module.css";

export type Header3Type = {
  className?: string;
};

const Header3: NextPage<Header3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.pdp}>PDP</div>
    </div>
  );
};

export default Header3;