import type { NextPage } from "next";
import styles from "./header2.module.css";

export type Header2Type = {
  className?: string;
};

const Header2: NextPage<Header2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <h1 className={styles.resetPassword}>Reset password</h1>
    </div>
  );
};

export default Header2;
