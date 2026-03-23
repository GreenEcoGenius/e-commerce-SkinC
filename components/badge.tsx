"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./badge.module.css";

export type BadgeType = {
  className?: string;
  badgeText?: string;

  /** Variant props */
  color?: CSSProperties["color"];

  /** Style props */
  badgePosition?: CSSProperties["position"];
  badgeTop?: CSSProperties["top"];
  badgeRight?: CSSProperties["right"];
};

const Badge: NextPage<BadgeType> = ({
  className = "",
  color = "Red",
  badgePosition,
  badgeTop,
  badgeRight,
  badgeText,
}) => {
  const badgeStyle: CSSProperties = useMemo(() => {
    return {
      position: badgePosition,
      top: badgeTop,
      right: badgeRight,
    };
  }, [badgePosition, badgeTop, badgeRight]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-color={color}
      style={badgeStyle}
    >
      <div className={styles.badgeText}>{badgeText}</div>
    </div>
  );
};

export default Badge;
