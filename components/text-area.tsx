import type { NextPage } from "next";
import styles from "./text-area.module.css";

export type TextAreaType = {
  className?: string;
  placeholder?: boolean;
  hint?: boolean;
  label?: boolean;

  /** Variant props */
  state?: string;
};

const TextArea: NextPage<TextAreaType> = ({
  className = "",
  state = "Default",
  placeholder = false,
  hint = false,
  label = true,
}) => {
  return (
    <div className={[styles.textArea, className].join(" ")} data-state={state}>
      {!!label && <div className={styles.label}>Your message</div>}
      <div className={styles.input}>
        {!!placeholder && <div className={styles.placeholder}>Placeholder</div>}
      </div>
      {!!hint && <div className={styles.hintText}>Hint text</div>}
    </div>
  );
};

export default TextArea;
