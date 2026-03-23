import type { NextPage } from "next";
import styles from "./header11.module.css";

export type Header8Type = {
  className?: string;
};

const Header8: NextPage<Header8Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <h1 className={styles.homepage}>Homepage</h1>
    </div>
  );
};

export default Header8;
