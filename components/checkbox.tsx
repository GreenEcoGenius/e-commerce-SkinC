"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./checkbox.module.css";

export type CheckboxType = {
  className?: string;
  label?: boolean;
  checkboxLabel?: string;

  /** Variant props */
  checked?: CSSProperties["checked"];

  /** Style props */
  checkboxIconBackgroundColor?: CSSProperties["backgroundColor"];
  checkboxIconMargin?: CSSProperties["margin"];
  checkboxIconPadding?: CSSProperties["padding"];
};

const Checkbox: NextPage<CheckboxType> = ({
  className = "",
  checked = false,
  label = true,
  checkboxIconBackgroundColor,
  checkboxIconMargin,
  checkboxIconPadding,
  checkboxLabel,
}) => {
  const checkboxIconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: checkboxIconBackgroundColor,
      margin: checkboxIconMargin,
      padding: checkboxIconPadding,
    };
  }, [checkboxIconBackgroundColor, checkboxIconMargin, checkboxIconPadding]);

  return (
    <div
      className={[styles.checkbox, className].join(" ")}
      data-checked={checked}
    >
      <div className={styles.checkboxIcon} style={checkboxIconStyle} />
      {!!label && <div className={styles.checkboxLabel}>{checkboxLabel}</div>}
    </div>
  );
};

export default Checkbox;
