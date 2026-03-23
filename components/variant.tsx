import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styles from "./variant.module.css";

export type VariantType = {
  className?: string;
  option?: string;

  /** Variant props */
  checked?: CSSProperties["checked"];
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
