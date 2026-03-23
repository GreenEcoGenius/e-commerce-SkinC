import type { NextPage } from "next";
import Input5 from "./input5";
import styles from "./image-wrapper4.module.css";

export type ImageWrapper4Type = {
  className?: string;
};

const ImageWrapper4: NextPage<ImageWrapper4Type> = ({ className = "" }) => {
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
        <Input5 onDark type="Right" />
      </div>
    </section>
  );
};

export default ImageWrapper4;
