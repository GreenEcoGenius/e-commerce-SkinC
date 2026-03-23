import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Arrow2 from "./arrow2";
import styles from "./input3.module.css";

export type Input3Type = {
  className?: string;
  type?: CSSProperties["type"];
  showArrow?: boolean;

  /** Variant props */
  onDark?: CSSProperties["onDark"];
};

const Input3: NextPage<Input3Type> = ({
  className = "",
  onDark = true,
  type,
  showArrow,
}) => {
  return (
    <div className={[styles.input, className].join(" ")} data-onDark={onDark}>
      <input
        className={styles.placeholder}
        placeholder="Enter your email"
        type="text"
      />
      <Arrow2 type={type} showArrow={showArrow} />
    </div>
  );
};

export default Input3;
