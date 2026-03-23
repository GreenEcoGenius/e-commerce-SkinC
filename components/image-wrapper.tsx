import type { NextPage } from "next";
import Input1 from "./input1";
import styles from "./image-wrapper.module.css";

export type ImageWrapperType = {
  className?: string;
};

const ImageWrapper: NextPage<ImageWrapperType> = ({ className = "" }) => {
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
        <Input1 onDark type="Right" />
      </div>
    </section>
  );
};

export default ImageWrapper;
