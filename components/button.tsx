"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./button.module.css";

export type ButtonType = {
  className?: string;
  buttonLabel?: string;

  /** Variant props */
  color?: CSSProperties["color"];

  /** Style props */
  buttonAlignSelf?: CSSProperties["alignSelf"];
};

const Button: NextPage<ButtonType> = ({
  className = "",
  color = "Bright",
  buttonAlignSelf,
  buttonLabel,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: buttonAlignSelf,
    };
  }, [buttonAlignSelf]);

  return (
    <button
      className={[styles.root, className].join(" ")}
      data-color={color}
      style={buttonStyle}
    >
      <div className={styles.buttonLabel}>{buttonLabel}</div>
    </button>
  );
};

export default Button;
