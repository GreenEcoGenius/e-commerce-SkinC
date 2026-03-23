import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styles from "./visibility.module.css";

export type VisibilityType = {
  className?: string;

  /** Variant props */
  visibility?: CSSProperties["visibility"];
};

const Visibility: NextPage<VisibilityType> = ({
  className = "",
  visibility = true,
}) => {
  return (
    <div
      className={[styles.visibility, className].join(" ")}
      data-visibility={visibility}
    >
      <Image
        className={styles.visibilityOffIcon}
        width={13.9}
        height={12.5}
        sizes="100vw"
        alt=""
        src="/visibility-off.svg"
      />
    </div>
  );
};

export default Visibility;
