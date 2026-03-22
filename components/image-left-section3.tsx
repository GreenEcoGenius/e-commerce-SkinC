import type { NextPage } from "next";
import Image from "next/image";
import styles from "./image-left-section3.module.css";

export type ImageLeftSection3Type = {
  className?: string;
};

const ImageLeftSection3: NextPage<ImageLeftSection3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.imageLeftSection, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.textButton}>
          <div className={styles.text}>
            <div className={styles.glowWithConfidence}>
              Glow with confidence
            </div>
            <h2 className={styles.ourPromiseTo}>Our promise to you</h2>
            <div className={styles.wereHereTo}>
              We’re here to help you embrace your skin’s natural radiance.
              Skin-Clinic promises to deliver skincare that’s safe, effective,
              and tailored for all skin types. With every use, we aim to bring
              you closer to the healthy, glowing complexion you deserve.
            </div>
          </div>
        </div>
        <Image
          className={styles.imageIcon}
          loading="lazy"
          width={588}
          height={588}
          sizes="100vw"
          alt=""
          src="/Image46@2x.png"
        />
      </div>
    </section>
  );
};

export default ImageLeftSection3;
