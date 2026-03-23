import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styles from "./badge2.module.css";

export type Badge2Type = {
  className?: string;
  badgeText?: string;

  /** Variant props */
  color?: CSSProperties["color"];
};

const Badge2: NextPage<Badge2Type> = ({
  className = "",
  color = "Red",
  badgeText,
}) => {
  return (
    <div className={[styles.root, className].join(" ")} data-color={color}>
      <div className={styles.badgeText}>{badgeText}</div>
    </div>
  );
};

export default Badge2;
