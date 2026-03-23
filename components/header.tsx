import type { NextPage } from "next";
import styles from "./header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <button className={[styles.header, className].join(" ")}>
      <button className={styles.logIn}>Log in</button>
    </button>
  );
};

export default Header;
