import type { NextPage } from "next";
import styles from "./header111.module.css";

export type Header8Type = {
  className?: string;
};

const Header8: NextPage<Header8Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.plp}>PLP</div>
    </div>
  );
};

export default Header8;
