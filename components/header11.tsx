import type { NextPage } from "next";
import styles from "./header11.module.css";

export type Header9Type = {
  className?: string;
};

const Header9: NextPage<Header9Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <h1 className={styles.homepage}>Homepage</h1>
    </div>
  );
};

export default Header9;
