import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styles from "./badge3.module.css";

export type Badge3Type = {
  className?: string;
  badgeText?: string;

  /** Variant props */
  color?: CSSProperties["color"];
};

const Badge3: NextPage<Badge3Type> = ({
  className = "",
  color = "Red",
  badgeText,
}) => {
  return (
    <div className={[styles.badge, className].join(" ")} data-color={color}>
      <div className={styles.badgeText}>{badgeText}</div>
    </div>
  );
};

export default Badge3;
