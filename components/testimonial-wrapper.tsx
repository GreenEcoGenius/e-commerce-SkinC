"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./testimonial-wrapper.module.css";

export type TestimonialWrapperType = {
  className?: string;
  saraJ?: string;
  theFaceTonerHasTransformed?: string;
  image: string;
  faceToner?: string;

  /** Style props */
  imageIconMaxHeight?: CSSProperties["maxHeight"];
  imageIconHeight?: CSSProperties["height"];
};

const TestimonialWrapper: NextPage<TestimonialWrapperType> = ({
  className = "",
  saraJ,
  theFaceTonerHasTransformed,
  image,
  imageIconMaxHeight,
  imageIconHeight,
  faceToner,
}) => {
  const imageIconStyle: CSSProperties = useMemo(() => {
    return {
      maxHeight: imageIconMaxHeight,
      height: imageIconHeight,
    };
  }, [imageIconMaxHeight, imageIconHeight]);

  return (
    <div className={[styles.testimonialWrapper, className].join(" ")}>
      <div className={styles.saraJ}>{saraJ}</div>
      <div className={styles.theFaceToner}>{theFaceTonerHasTransformed}</div>
      <div className={styles.button}>
        <Image
          className={styles.imageIcon}
          loading="lazy"
          width={50}
          height={50}
          sizes="100vw"
          alt=""
          src={image}
          style={imageIconStyle}
        />
        <div className={styles.rightText}>
          <div className={styles.faceToner}>{faceToner}</div>
          <div className={styles.viewProduct}>View product</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialWrapper;
