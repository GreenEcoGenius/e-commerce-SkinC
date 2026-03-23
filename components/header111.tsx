import type { NextPage } from "next";
import styles from "./header111.module.css";

export type Header6Type = {
  className?: string;
};

const Header6: NextPage<Header6Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.plp}>PLP</div>
    </div>
  );
};

export default Header6;
