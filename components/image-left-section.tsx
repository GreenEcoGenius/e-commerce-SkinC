import type { NextPage } from "next";
import Image from "next/image";
import Button from "./button";
import styles from "./image-left-section.module.css";

export type ImageLeftSectionType = {
  className?: string;
};

const ImageLeftSection: NextPage<ImageLeftSectionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.imageLeftSection, className].join(" ")}>
      <div className={styles.container}>
        <Image
          className={styles.imageIcon}
          loading="lazy"
          width={588}
          height={588}
          sizes="100vw"
          alt=""
          src="/Image2@2x.png"
        />
        <section className={styles.textButton}>
          <div className={styles.text}>
            <h1
              className={styles.hydrateRevitalize}
            >{`Hydrate & revitalize with our pure face mask`}</h1>
            <div className={styles.indulgeYourSkin}>
              Indulge your skin with natural botanical extracts and oils. This
              mask hydrates, soothes, and restores glow for all skin types in
              minutes.
            </div>
          </div>
          <Button
            color="Dark"
            buttonAlignSelf="unset"
            buttonLabel="Shop the face mask"
          />
        </section>
      </div>
    </section>
  );
};

export default ImageLeftSection;