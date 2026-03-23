import type { NextPage } from "next";
import styles from "./header11.module.css";

export type Header2Type = {
  className?: string;
};

const Header2: NextPage<Header2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.plp}>PLP</div>
    </div>
  );
};

export default Header2;
