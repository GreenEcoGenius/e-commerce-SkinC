import type { NextPage } from "next";
import Image from "next/image";
import styles from "./product3.module.css";

export type Product3Type = {
  className?: string;
  image: string;
  bodyWash?: string;
};

const Product3: NextPage<Product3Type> = ({
  className = "",
  image,
  bodyWash,
}) => {
  return (
    <div className={[styles.product, className].join(" ")}>
      <Image
        className={styles.imageIcon}
        loading="lazy"
        width={282}
        height={324}
        sizes="100vw"
        alt=""
        src={image}
      />
      <div className={styles.productInfo}>
        <div className={styles.bodyWash}>{bodyWash}</div>
        <div className={styles.div}>$49.99</div>
      </div>
    </div>
  );
};

export default Product3;
