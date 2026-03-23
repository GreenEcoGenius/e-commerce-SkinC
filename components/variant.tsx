import type { NextPage } from "next";
import styles from "./variant.module.css";

export type VariantType = {
  className?: string;
  option?: string;

  /** Variant props */
  checked?: boolean;
};

const Variant: NextPage<VariantType> = ({
  className = "",
  checked = true,
  option,
}) => {
  return (
    <div
      className={[styles.variant, className].join(" ")}
      data-checked={checked}
    >
      <div className={styles.option}>{option}</div>
    </div>
  );
};

export default Variant;
