import type { NextPage } from "next";
import styles from "./header41.module.css";

export type Header14Type = {
  className?: string;
};

const Header14: NextPage<Header14Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <h1 className={styles.aboutUs}>About us</h1>
    </div>
  );
};

export default Header14;
