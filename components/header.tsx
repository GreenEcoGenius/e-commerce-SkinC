import type { NextPage } from "next";
import styles from "./header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <h1 className={styles.homepage}>Homepage</h1>
    </div>
  );
};

export default Header;
