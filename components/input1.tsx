import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Arrow from "./arrow";
import styles from "./input1.module.css";

export type Input1Type = {
  className?: string;
  type?: CSSProperties["type"];

  /** Variant props */
  onDark?: CSSProperties["onDark"];
};

const Input1: NextPage<Input1Type> = ({
  className = "",
  onDark = true,
  type,
}) => {
  return (
    <div className={[styles.input, className].join(" ")} data-onDark={onDark}>
      <input
        className={styles.placeholder}
        placeholder="Enter your email"
        type="text"
      />
      <Arrow type={type} />
    </div>
  );
};

export default Input1;
