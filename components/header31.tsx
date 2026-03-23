import type { NextPage } from "next";
import styles from "./header31.module.css";

export type Header10Type = {
  className?: string;
};

const Header10: NextPage<Header10Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.checkoutForm}>Checkout form</div>
    </div>
  );
};

export default Header10;
