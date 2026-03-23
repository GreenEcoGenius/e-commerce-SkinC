import type { NextPage } from "next";
import Image from "next/image";
import styles from "./accordion1.module.css";

export type Accordion1Type = {
  className?: string;
  accordionHeader?: string;

  /** Variant props */
  open1?: boolean;
};

const Accordion1: NextPage<Accordion1Type> = ({
  className = "",
  open1 = false,
  accordionHeader,
}) => {
  return (
    <div className={[styles.accordion, className].join(" ")} data-open={open1}>
      <div className={styles.top}>
        <div className={styles.accordionHeader}>{accordionHeader}</div>
        <Image
          className={styles.checkIndeterminateSmallIcon}
          loading="lazy"
          width={16}
          height={16}
          sizes="100vw"
          alt=""
          src="/check-indeterminate-small.svg"
        />
      </div>
    </div>
  );
};

export default Accordion1;
