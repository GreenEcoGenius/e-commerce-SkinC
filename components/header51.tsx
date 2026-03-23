import type { NextPage } from "next";
import styles from "./header51.module.css";

export type Header15Type = {
  className?: string;
};

const Header15: NextPage<Header15Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.journalArticles}>Journal articles</div>
    </div>
  );
};

export default Header15;
