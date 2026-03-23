import type { NextPage } from "next";
import styles from "./header31.module.css";

export type Header12Type = {
  className?: string;
};

const Header12: NextPage<Header12Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.checkoutForm}>Checkout form</div>
    </div>
  );
};

export default Header12;
