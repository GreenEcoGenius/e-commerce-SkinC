import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styles from "./button.module.css";

export type ButtonType = {
  className?: string;

  /** Variant props */
  color?: CSSProperties["color"];
};

const Button: NextPage<ButtonType> = ({ className = "", color = "Bright" }) => {
  return (
    <button
      className={[styles.button, className].join(" ")}
      type="submit"
      data-color={color}
    >
      <div className={styles.buttonLabel}>Log in</div>
    </button>
  );
};

export default Button;
