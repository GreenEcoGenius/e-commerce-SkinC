import type { NextPage } from "next";
import Image from "next/image";
import Button1 from "./button2";
import styles from "./full-image-section.module.css";

export type FullImageSectionType = {
  className?: string;
};

const FullImageSection: NextPage<FullImageSectionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.fullImageSection, className].join(" ")}>
      <div className={styles.imageWrapper}>
        <div className={styles.heroOffer}>
          <div className={styles.text}>
            <div className={styles.essenceForA}>
              Essence for a brighter complexion
            </div>
            <h2 className={styles.pureHydrationIn}>
              Pure hydration in every drop
            </h2>
          </div>
          <Button1
            color="Bright"
            buttonAlignSelf="unset"
            buttonLabel="Shop now"
          />
        </div>
        <div className={styles.button}>
          <Image
            className={styles.imageIcon}
            loading="lazy"
            width={100}
            height={100}
            sizes="100vw"
            alt=""
            src="/Image16@2x.png"
          />
          <div className={styles.rightText}>
            <div className={styles.faceToner}>Face Toner</div>
            <div className={styles.price}>
              <div className={styles.space}>$59.99</div>
              <div className={styles.space2}>$47.99</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullImageSection;
