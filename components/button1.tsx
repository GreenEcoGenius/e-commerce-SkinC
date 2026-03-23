import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styles from "./button1.module.css";

export type Button3Type = {
  className?: string;

  /** Variant props */
  color?: CSSProperties["color"];
};

const Button3: NextPage<Button3Type> = ({
  className = "",
  color = "Bright",
}) => {
  return (
    <button className={[styles.button, className].join(" ")} data-color={color}>
      <div className={styles.buttonLabel}>Add to cart</div>
    </button>
  );
};

export default Button3;
