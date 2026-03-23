import type { NextPage } from "next";
import Input7 from "./input5";
import styles from "./image-wrapper4.module.css";

export type ImageWrapper6Type = {
  className?: string;
};

const ImageWrapper6: NextPage<ImageWrapper6Type> = ({ className = "" }) => {
  return (
    <section className={[styles.imageWrapper, className].join(" ")}>
      <div className={styles.textInput}>
        <h1 className={styles.subscribeForExclusive}>
          Subscribe for exclusive deals
        </h1>
        <div className={styles.getExclusiveAccess}>
          Get exclusive access to the latest natural skincare deals and tips
          delivered straight to your inbox!
        </div>
        <Input7 onDark type="Right" />
      </div>
    </section>
  );
};

export default ImageWrapper6;
