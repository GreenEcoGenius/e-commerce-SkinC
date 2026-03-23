import type { NextPage } from "next";
import styles from "./header5.module.css";

export type Header6Type = {
  className?: string;
};

const Header6: NextPage<Header6Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.journalArticles}>Journal articles</div>
    </div>
  );
};

export default Header6;