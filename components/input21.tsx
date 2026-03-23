import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styles from "./input21.module.css";

export type Input3Type = {
  className?: string;
  placeholder?: string;
  keyboardArrowDown: string;

  /** Variant props */
  onDark?: CSSProperties["onDark"];
};

const Input3: NextPage<Input3Type> = ({
  className = "",
  onDark = true,
  placeholder,
  keyboardArrowDown,
}) => {
  return (
    <div className={[styles.root, className].join(" ")} data-onDark={onDark}>
      <div className={styles.placeholder}>{placeholder}</div>
      <div className={styles.chevron}>
        <Image
          className={styles.keyboardArrowDownIcon}
          width={7.5}
          height={4.5}
          sizes="100vw"
          alt=""
          src={keyboardArrowDown}
        />
      </div>
    </div>
  );
};

export default Input3;
