import type { NextPage } from "next";
import Image from "next/image";
import styles from "./product2.module.css";

export type Product2Type = {
  className?: string;
  image: string;
  image1: string;
  faceMask?: string;
  bodyWash?: string;
};

const Product2: NextPage<Product2Type> = ({
  className = "",
  image,
  image1,
  faceMask,
  bodyWash,
}) => {
  return (
    <div className={[styles.product, className].join(" ")}>
      <Image
        className={styles.imageIcon}
        width={163}
        height={187.3}
        sizes="100vw"
        alt=""
        src={image}
      />
      <Image
        className={styles.imageIcon2}
        loading="lazy"
        width={282}
        height={324}
        sizes="100vw"
        alt=""
        src={image1}
      />
      <div className={styles.productInfo}>
        <div className={styles.faceMask}>{faceMask}</div>
        <div className={styles.bodyWash}>{bodyWash}</div>
        <div className={styles.div}>$49.99</div>
      </div>
    </div>
  );
};

export default Product2;
