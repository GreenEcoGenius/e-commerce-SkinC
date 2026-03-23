import type { NextPage } from "next";
import Arrow4 from "./arrow21";
import styles from "./input31.module.css";

export type Input5Type = {
  className?: string;
  type?: string;

  /** Variant props */
  onDark?: boolean;
};

const Input5: NextPage<Input5Type> = ({
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
      <Arrow4 type={type} />
    </div>
  );
};

export default Input5;
