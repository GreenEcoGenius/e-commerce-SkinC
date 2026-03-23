import type { NextPage } from "next";
import Input3 from "./input21";
import styles from "./image-wrapper11.module.css";

export type ImageWrapper2Type = {
  className?: string;
};

const ImageWrapper2: NextPage<ImageWrapper2Type> = ({ className = "" }) => {
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
        <Input3
          onDark
          placeholder="Enter your email"
          keyboardArrowDown="/arrow-right-alt.svg"
        />
      </div>
    </section>
  );
};

export default ImageWrapper2;
