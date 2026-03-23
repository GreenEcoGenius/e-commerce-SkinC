import type { NextPage } from "next";
import styles from "./header4.module.css";

export type Header4Type = {
  className?: string;
};

const Header4: NextPage<Header4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.profileSettings}>Profile settings</div>
    </div>
  );
};

export default Header4;
