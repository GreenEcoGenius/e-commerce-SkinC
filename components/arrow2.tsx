import type { NextPage } from "next";
import Image from "next/image";
import styles from "./arrow2.module.css";

export type Arrow2Type = {
  className?: string;
  showArrow?: boolean;

  /** Variant props */
  type?: string;
};

const Arrow2: NextPage<Arrow2Type> = ({
  className = "",
  type = "Left",
  showArrow,
}) => {
  return (
    !!showArrow && (
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
    )
  );
};

export default Arrow2;
