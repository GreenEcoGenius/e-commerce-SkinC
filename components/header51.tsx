import type { NextPage } from "next";
import styles from "./header51.module.css";

export type Header14Type = {
  className?: string;
};

const Header14: NextPage<Header14Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.journalArticles}>Journal articles</div>
    </div>
  );
};

export default Header14;
