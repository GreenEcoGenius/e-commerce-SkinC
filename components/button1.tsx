import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styles from "./button1.module.css";

export type Button2Type = {
  className?: string;

  /** Variant props */
  color?: CSSProperties["color"];
};

const Button2: NextPage<Button2Type> = ({
  className = "",
  color = "Bright",
}) => {
  return (
    <button className={[styles.button, className].join(" ")} data-color={color}>
      <div className={styles.buttonLabel}>Add to cart</div>
    </button>
  );
};

export default Button2;