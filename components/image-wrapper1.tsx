import type { NextPage } from "next";
import Input2 from "./input2";
import styles from "./image-wrapper1.module.css";

export type ImageWrapper1Type = {
  className?: string;
};

const ImageWrapper1: NextPage<ImageWrapper1Type> = ({ className = "" }) => {
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
        <Input2
          onDark
          placeholder="Enter your email"
          keyboardArrowDown="/arrow-right-alt.svg"
        />
      </div>
    </section>
  );
};

export default ImageWrapper1;
