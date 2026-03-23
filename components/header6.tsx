import type { NextPage } from "next";
import styles from "./header6.module.css";

export type Header6Type = {
  className?: string;
};

const Header6: NextPage<Header6Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <h1 className={styles.resetPassword}>Reset password</h1>
    </div>
  );
};

export default Header6;
