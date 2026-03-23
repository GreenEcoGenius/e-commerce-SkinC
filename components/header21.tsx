import type { NextPage } from "next";
import styles from "./header21.module.css";

export type Header9Type = {
  className?: string;
};

const Header9: NextPage<Header9Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.pdp}>PDP</div>
    </div>
  );
};

export default Header9;
