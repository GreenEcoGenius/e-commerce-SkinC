import type { NextPage } from "next";
import Arrow2 from "./arrow2";
import styles from "./input-alt1.module.css";

export type InputAlt1Type = {
  className?: string;
  placeholder?: boolean;
  icon?: boolean;
  hint?: boolean;
  label?: boolean;
  label1?: string;
  placeholder1?: string;
  type?: string;
  showArrow?: boolean;

  /** Variant props */
  state?: string;
};

const InputAlt1: NextPage<InputAlt1Type> = ({
  className = "",
  state = "Default",
  placeholder = true,
  icon = false,
  hint = false,
  label = true,
  label1,
  placeholder1,
  type,
  showArrow,
}) => {
  return (
    <div className={[styles.inputAlt, className].join(" ")} data-state={state}>
      {!!label && <div className={styles.label}>{label1}</div>}
      <div className={styles.input}>
        {!!placeholder && (
          <input
            className={styles.placeholder}
            placeholder={placeholder1}
            type="text"
          />
        )}
        <Arrow2 type={type} showArrow={showArrow} />
      </div>
      {!!hint && <div className={styles.hintText}>Hint text</div>}
    </div>
  );
};

export default InputAlt1;
