import type { NextPage } from "next";
import styles from "./header11.module.css";

export type Header4Type = {
  className?: string;
};

const Header4: NextPage<Header4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.plp}>PLP</div>
    </div>
  );
};

export default Header4;