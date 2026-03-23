import type { NextPage } from "next";
import styles from "./variant1.module.css";

export type Variant1Type = {
  className?: string;
  option?: string;

  /** Variant props */
  checked?: boolean;
};

const Variant1: NextPage<Variant1Type> = ({
  className = "",
  checked = true,
  option,
}) => {
  return (
    <button
      className={[styles.root, className].join(" ")}
      data-checked={checked}
    >
      <div className={styles.option}>{option}</div>
    </button>
  );
};

export default Variant1;
