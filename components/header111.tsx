import type { NextPage } from "next";
import styles from "./header111.module.css";

export type Header9Type = {
  className?: string;
};

const Header9: NextPage<Header9Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.plp}>PLP</div>
    </div>
  );
};

export default Header9;
