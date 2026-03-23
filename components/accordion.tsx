import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styles from "./accordion.module.css";

export type AccordionType = {
  className?: string;
  accordionHeader?: string;

  /** Variant props */
  open1?: CSSProperties["open"];
};

const Accordion: NextPage<AccordionType> = ({
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

export default Accordion;
