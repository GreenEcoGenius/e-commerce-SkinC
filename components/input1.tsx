import type { NextPage } from "next";
import Arrow from "./arrow";
import styles from "./input1.module.css";

export type Input1Type = {
  className?: string;
  type?: string;

  /** Variant props */
  onDark?: boolean;
};

const Input1: NextPage<Input1Type> = ({
  className = "",
  onDark = true,
  type,
}) => {
  return (
    <div className={[styles.input, className].join(" ")} data-ondark={onDark}>
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
