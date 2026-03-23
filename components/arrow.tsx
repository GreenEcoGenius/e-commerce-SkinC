import type { NextPage } from "next";
import Image from "next/image";
import styles from "./arrow.module.css";

export type ArrowType = {
  className?: string;

  /** Variant props */
  type?: string;
};

const Arrow: NextPage<ArrowType> = ({ className = "", type = "Left" }) => {
  return (
    <div className={[styles.arrow, className].join(" ")} data-type={type}>
      <Image
        className={styles.arrowRightAltIcon}
        width={10}
        height={7.5}
        sizes="100vw"
        alt=""
        src="/arrow-right-alt.svg"
      />
    </div>
  );
};

export default Arrow;
