import type { NextPage } from "next";
import styles from "./header11.module.css";

export type Header10Type = {
  className?: string;
};

const Header10: NextPage<Header10Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <h1 className={styles.homepage}>Homepage</h1>
    </div>
  );
};

export default Header10;
