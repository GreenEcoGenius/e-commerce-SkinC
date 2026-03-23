import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styles from "./input-alt.module.css";

export type InputAltType = {
  className?: string;
  placeholder?: boolean;
  icon?: boolean;
  hint?: boolean;
  label?: boolean;
  label1?: string;
  placeholder1?: string;

  /** Variant props */
  state?: CSSProperties["state"];
};

const InputAlt: NextPage<InputAltType> = ({
  className = "",
  state = "Default",
  placeholder = true,
  icon = false,
  hint = false,
  label = true,
  label1,
  placeholder1,
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
        {!!icon && (
          <div className={styles.arrow}>
            <Image
              className={styles.arrowRightAltIcon}
              width={10}
              height={7.5}
              sizes="100vw"
              alt=""
              src="/arrow-right-alt.svg"
            />
          </div>
        )}
      </div>
      {!!hint && <div className={styles.hintText}>Hint text</div>}
    </div>
  );
};

export default InputAlt;
