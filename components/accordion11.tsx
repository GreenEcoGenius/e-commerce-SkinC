import type { NextPage } from "next";
import Image from "next/image";
import styles from "./accordion11.module.css";

export type Accordion2Type = {
  className?: string;
  accordionHeader?: string;

  /** Variant props */
  open1?: boolean;
};

const Accordion2: NextPage<Accordion2Type> = ({
  className = "",
  open1 = false,
  accordionHeader,
}) => {
  return (
    <div className={[styles.accordion, className].join(" ")} data-open={open1}>
      <div className={styles.top}>
        <div className={styles.accordionHeader}>{accordionHeader}</div>
        <Image
          className={styles.addIcon}
          loading="lazy"
          width={16}
          height={16}
          sizes="100vw"
          alt=""
          src="/add.svg"
        />
      </div>
    </div>
  );
};

export default Accordion2;
