import type { NextPage } from "next";
import Arrow6 from "./arrow4";
import styles from "./input5.module.css";

export type Input7Type = {
  className?: string;
  type?: string;

  /** Variant props */
  onDark?: boolean;
};

const Input7: NextPage<Input7Type> = ({
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
      <Arrow6 type={type} />
    </div>
  );
};

export default Input7;
