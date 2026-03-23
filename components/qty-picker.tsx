import type { NextPage } from "next";
import Image from "next/image";
import styles from "./qty-picker.module.css";

export type QtyPickerType = {
  className?: string;
};

const QtyPicker: NextPage<QtyPickerType> = ({ className = "" }) => {
  return (
    <div className={[styles.qtyPicker, className].join(" ")}>
      <Image
        className={styles.tapableAreaIcon}
        width={48}
        height={48}
        sizes="100vw"
        alt=""
        src="/Tapable-Area@2x.png"
      />
      <div className={styles.div}>1</div>
      <Image
        className={styles.tapableAreaIcon}
        width={48}
        height={48}
        sizes="100vw"
        alt=""
        src="/Tapable-Area1@2x.png"
      />
    </div>
  );
};

export default QtyPicker;
