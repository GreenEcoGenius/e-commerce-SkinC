import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Arrow3 from "./arrow2";
import styles from "./input3.module.css";

export type Input4Type = {
  className?: string;
  type?: CSSProperties["type"];

  /** Variant props */
  onDark?: CSSProperties["onDark"];
};

const Input4: NextPage<Input4Type> = ({
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
      <Arrow3 type={type} />
    </div>
  );
};

export default Input4;
