import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Arrow4 from "./arrow3";
import styles from "./input4.module.css";

export type Input5Type = {
  className?: string;
  type?: CSSProperties["type"];

  /** Variant props */
  onDark?: CSSProperties["onDark"];
};

const Input5: NextPage<Input5Type> = ({
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
      <Arrow4 type={type} />
    </div>
  );
};

export default Input5;
