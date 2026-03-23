"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./badge1.module.css";

export type Badge1Type = {
  className?: string;
  showBadge?: boolean;
  badgeText?: string;

  /** Variant props */
  color?: CSSProperties["color"];

  /** Style props */
  badgeRight?: CSSProperties["right"];
};

const Badge1: NextPage<Badge1Type> = ({
  className = "",
  color = "Red",
  showBadge,
  badgeRight,
  badgeText,
}) => {
  const badge1Style: CSSProperties = useMemo(() => {
    return {
      right: badgeRight,
    };
  }, [badgeRight]);

  return (
    !!showBadge && (
      <div
        className={[styles.root, className].join(" ")}
        data-color={color}
        style={badge1Style}
      >
        <div className={styles.badgeText}>{badgeText}</div>
      </div>
    )
  );
};

export default Badge1;
