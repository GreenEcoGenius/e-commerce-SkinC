import type { NextPage } from "next";
import styles from "./header5.module.css";

export type Header5Type = {
  className?: string;
};

const Header5: NextPage<Header5Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.editPassword}>Edit password</div>
    </div>
  );
};

export default Header5;
