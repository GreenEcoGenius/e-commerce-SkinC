import type { NextPage } from "next";
import styles from "./header51.module.css";

export type Header13Type = {
  className?: string;
};

const Header13: NextPage<Header13Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.journalArticles}>Journal articles</div>
    </div>
  );
};

export default Header13;
