import type { NextPage } from "next";
import Arrow1 from "./arrow1";
import styles from "./input2.module.css";

export type Input2Type = {
  className?: string;
  type?: string;

  /** Variant props */
  onDark?: boolean;
};

const Input2: NextPage<Input2Type> = ({
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
      <Arrow1 type={type} />
    </div>
  );
};

export default Input2;
