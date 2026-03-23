import type { NextPage } from "next";
import Input4 from "./input4";
import styles from "./image-wrapper3.module.css";

export type ImageWrapper3Type = {
  className?: string;
};

const ImageWrapper3: NextPage<ImageWrapper3Type> = ({ className = "" }) => {
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
        <Input4 onDark type="Right" />
      </div>
    </section>
  );
};

export default ImageWrapper3;
