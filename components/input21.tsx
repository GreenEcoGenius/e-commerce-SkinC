import type { NextPage } from "next";
import Image from "next/image";
import styles from "./input21.module.css";

export type Input4Type = {
  className?: string;
  placeholder?: string;
  keyboardArrowDown: string;

  /** Variant props */
  onDark?: boolean;
};

const Input4: NextPage<Input4Type> = ({
  className = "",
  onDark = true,
  placeholder,
  keyboardArrowDown,
}) => {
  return (
    <div className={[styles.root, className].join(" ")} data-ondark={onDark}>
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

export default Input4;
