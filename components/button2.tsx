"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./button2.module.css";

export type Button1Type = {
  className?: string;
  buttonLabel?: string;

  /** Variant props */
  color?: CSSProperties["color"];

  /** Style props */
  buttonAlignSelf?: CSSProperties["alignSelf"];
};

const Button1: NextPage<Button1Type> = ({
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

export default Button1;
