import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styles from "./skin-clinic-logo1.module.css";

export type SkinClinicLogo2Type = {
  className?: string;

  /** Variant props */
  color?: CSSProperties["color"];
};

const SkinClinicLogo2: NextPage<SkinClinicLogo2Type> = ({
  className = "",
  color = "Dark",
}) => {
  return (
    <div
      className={[styles.skinclinicLogo, className].join(" ")}
      data-color={color}
    >
      <Image
        className={styles.vectorIcon}
        loading="lazy"
        width={120}
        height={18.4}
        sizes="100vw"
        alt=""
        src="/Vector.svg"
      />
    </div>
  );
};

export default SkinClinicLogo2;
