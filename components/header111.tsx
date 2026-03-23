import type { NextPage } from "next";
import styles from "./header111.module.css";

export type Header11Type = {
  className?: string;
};

const Header11: NextPage<Header11Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.plp}>PLP</div>
    </div>
  );
};

export default Header11;
