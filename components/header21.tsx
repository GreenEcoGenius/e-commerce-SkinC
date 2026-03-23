import type { NextPage } from "next";
import styles from "./header21.module.css";

export type Header11Type = {
  className?: string;
};

const Header11: NextPage<Header11Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.pdp}>PDP</div>
    </div>
  );
};

export default Header11;
