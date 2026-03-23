import type { NextPage } from "next";
import styles from "./header5.module.css";

export type Header8Type = {
  className?: string;
};

const Header8: NextPage<Header8Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.journalArticles}>Journal articles</div>
    </div>
  );
};

export default Header8;