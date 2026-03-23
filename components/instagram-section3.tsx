import type { NextPage } from "next";
import Image from "next/image";
import styles from "./instagram-section3.module.css";

export type InstagramSection4Type = {
  className?: string;
};

const InstagramSection4: NextPage<InstagramSection4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.instagramSection, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.followUsOn}>Follow us on instagram</div>
        <h2 className={styles.skinclinic}>@Skin—Clinic</h2>
      </div>
      <div className={styles.categoryWrapper}>
        <Image
          className={styles.instagramImageIcon}
          loading="lazy"
          width={220.8}
          height={220.8}
          sizes="100vw"
          alt=""
          src="/Instagram-Image@2x.png"
        />
        <Image
          className={styles.instagramImageIcon}
          loading="lazy"
          width={220.8}
          height={220.8}
          sizes="100vw"
          alt=""
          src="/Instagram-Image4@2x.png"
        />
        <Image
          className={styles.instagramImageIcon}
          loading="lazy"
          width={220.8}
          height={220.8}
          sizes="100vw"
          alt=""
          src="/Instagram-Image1@2x.png"
        />
        <Image
          className={styles.instagramImageIcon}
          loading="lazy"
          width={220.8}
          height={220.8}
          sizes="100vw"
          alt=""
          src="/Instagram-Image3@2x.png"
        />
        <Image
          className={styles.instagramImageIcon}
          loading="lazy"
          width={220.8}
          height={220.8}
          sizes="100vw"
          alt=""
          src="/Instagram-Image2@2x.png"
        />
      </div>
    </section>
  );
};

export default InstagramSection4;
