import type { NextPage } from "next";
import styles from "./header3.module.css";

export type Header4Type = {
  className?: string;
};

const Header4: NextPage<Header4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.checkoutForm}>Checkout form</div>
    </div>
  );
};

export default Header4;