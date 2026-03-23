import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styles from "./arrow4.module.css";

export type Arrow4Type = {
  className?: string;

  /** Variant props */
  type?: CSSProperties["type"];
};

const Arrow4: NextPage<Arrow4Type> = ({ className = "", type = "Left" }) => {
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

export default Arrow4;
