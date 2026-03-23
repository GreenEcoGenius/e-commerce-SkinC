import type { NextPage } from "next";
import styles from "./header4.module.css";

export type Header7Type = {
  className?: string;
};

const Header7: NextPage<Header7Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <h1 className={styles.aboutUs}>About us</h1>
    </div>
  );
};

export default Header7;