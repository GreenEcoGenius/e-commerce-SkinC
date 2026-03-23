import type { NextPage } from "next";
import styles from "./header21.module.css";

export type Header7Type = {
  className?: string;
};

const Header7: NextPage<Header7Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.pdp}>PDP</div>
    </div>
  );
};

export default Header7;
