import type { NextPage } from "next";
import Image from "next/image";
import styles from "./arrow1.module.css";

export type Arrow1Type = {
  className?: string;

  /** Variant props */
  type?: string;
};

const Arrow1: NextPage<Arrow1Type> = ({ className = "", type = "Left" }) => {
  return (
    <div className={[styles.arrow, className].join(" ")} data-type={type}>
      <Image
        className={styles.arrowRightAltIcon}
        loading="lazy"
        width={10}
        height={7.5}
        sizes="100vw"
        alt=""
        src="/arrow-right-alt.svg"
      />
    </div>
  );
};

export default Arrow1;
