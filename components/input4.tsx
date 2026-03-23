import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Arrow5 from "./arrow3";
import styles from "./input4.module.css";

export type Input6Type = {
  className?: string;
  type?: CSSProperties["type"];

  /** Variant props */
  onDark?: CSSProperties["onDark"];
};

const Input6: NextPage<Input6Type> = ({
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
      <Arrow5 type={type} />
    </div>
  );
};

export default Input6;
