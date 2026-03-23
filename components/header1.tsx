import type { NextPage } from "next";
import styles from "./header1.module.css";

export type Header1Type = {
  className?: string;
};

const Header1: NextPage<Header1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <h1 className={styles.homepage}>Homepage</h1>
    </div>
  );
};

export default Header1;