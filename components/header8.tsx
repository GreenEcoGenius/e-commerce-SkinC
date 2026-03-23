import type { NextPage } from "next";
import styles from "./header8.module.css";

export type Header8Type = {
  className?: string;
};

const Header8: NextPage<Header8Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.contactUs}>Contact us</div>
    </div>
  );
};

export default Header8;
