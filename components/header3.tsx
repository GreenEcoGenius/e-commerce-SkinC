import type { NextPage } from "next";
import styles from "./header3.module.css";

export type Header6Type = {
  className?: string;
};

const Header6: NextPage<Header6Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.checkoutForm}>Checkout form</div>
    </div>
  );
};

export default Header6;