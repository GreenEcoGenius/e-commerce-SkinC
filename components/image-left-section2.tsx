import type { NextPage } from "next";
import Image from "next/image";
import styles from "./image-left-section2.module.css";

export type ImageLeftSection2Type = {
  className?: string;
};

const ImageLeftSection2: NextPage<ImageLeftSection2Type> = ({
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
          src="/Image47@2x.png"
        />
        <div className={styles.textButton}>
          <div className={styles.text}>
            <div className={styles.pureIngredientsPure}>
              Pure ingredients, pure results
            </div>
            <h1 className={styles.whatSetsUs}>What sets us apart</h1>
            <div className={styles.atSkinclinicWe}>
              At Skin—Clinic, we prioritize quality with every product. We
              source the finest natural ingredients, blending them into gentle
              yet powerful formulas. Our commitment to sustainability and
              transparency ensures that every bottle reflects our dedication to
              your skin and the planet.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageLeftSection2;
