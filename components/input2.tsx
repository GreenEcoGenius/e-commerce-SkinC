import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Arrow1 from "./arrow1";
import styles from "./input2.module.css";

export type Input2Type = {
  className?: string;
  type?: CSSProperties["type"];

  /** Variant props */
  onDark?: CSSProperties["onDark"];
};

const Input2: NextPage<Input2Type> = ({
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
      <Arrow1 type={type} />
    </div>
  );
};

export default Input2;
