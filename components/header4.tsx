import type { NextPage } from "next";
import styles from "./header4.module.css";

export type Header5Type = {
  className?: string;
};

const Header5: NextPage<Header5Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <h1 className={styles.aboutUs}>About us</h1>
    </div>
  );
};

export default Header5;