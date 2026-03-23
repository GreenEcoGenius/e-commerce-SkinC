import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styles from "./accordion.module.css";

export type AccordionType = {
  className?: string;

  /** Variant props */
  open1?: CSSProperties["open"];
};

const Accordion: NextPage<AccordionType> = ({
  className = "",
  open1 = false,
}) => {
  return (
    <div className={[styles.accordion, className].join(" ")} data-open={open1}>
      <div className={styles.top}>
        <div className={styles.accordionHeader}>
          What payment methods do you accept?
        </div>
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
      <div className={styles.loremIpsumDolor}>
        We accept credit/debit cards, PayPal, and Apple Pay for a seamless
        checkout experience.
      </div>
    </div>
  );
};

export default Accordion;
