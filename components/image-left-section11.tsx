"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Variant1 from "./variant1";
import QtyPicker from "./qty-picker";
import Button2 from "./button1";
import Accordion2 from "./accordion11";
import styles from "./image-left-section11.module.css";

export type ImageLeftSection2Type = {
  className?: string;
};

const ImageLeftSection2: NextPage<ImageLeftSection2Type> = ({
  className = "",
}) => {
  const [variant1Items] = useState([
    {
      checked: true,
      option: "100 ml",
    },
    {
      checked: false,
      option: "250 ml",
    },
    {
      checked: false,
      option: "500 ml",
    },
  ]);
  const [accordion2Items] = useState([
    {
      open1: false,
      accordionHeader: "Details",
    },
    {
      open1: false,
      accordionHeader: "How to use",
    },
    {
      open1: false,
      accordionHeader: "Ingredients",
    },
  ]);
  return (
    <main className={[styles.imageLeftSection, className].join(" ")}>
      <div className={styles.container}>
        <section className={styles.thumbnails}>
          <Image
            className={styles.thumbnailIcon}
            loading="lazy"
            width={588}
            height={588}
            sizes="100vw"
            alt=""
            src="/Thumbnail@2x.png"
          />
          <div className={styles.images}>
            <Image
              className={styles.imageIcon}
              loading="lazy"
              width={78}
              height={78}
              sizes="100vw"
              alt=""
              src="/Image33@2x.png"
            />
            <Image
              className={styles.imageIcon}
              loading="lazy"
              width={78}
              height={78}
              sizes="100vw"
              alt=""
              src="/Image40@2x.png"
            />
            <Image
              className={styles.imageIcon}
              loading="lazy"
              width={78}
              height={78}
              sizes="100vw"
              alt=""
              src="/Image39@2x.png"
            />
            <Image
              className={styles.imageIcon}
              loading="lazy"
              width={78}
              height={78}
              sizes="100vw"
              alt=""
              src="/Image36@2x.png"
            />
          </div>
        </section>
        <section className={styles.textButton}>
          <div className={styles.text}>
            <div className={styles.heading}>
              <div className={styles.face}>Face</div>
              <h1 className={styles.pureSolutionEssence}>
                Pure Solution Essence
              </h1>
              <h3 className={styles.h3}>$49.99</h3>
            </div>
            <div className={styles.elevateYourSkincare}>
              Elevate your skincare with Pure Solution Essence, a lightweight
              formula infused with potent actives targeting blemishes and
              restoring radiance. Perfect for all skin types, it hydrates and
              balances for a natural glow.
            </div>
            <div className={styles.heading}>
              <div className={styles.quantity}>Size</div>
              <div className={styles.variants}>
                {variant1Items.map((item, index) => (
                  <Variant1
                    key={index}
                    checked={item.checked}
                    option={item.option}
                  />
                ))}
              </div>
            </div>
            <div className={styles.heading}>
              <div className={styles.quantity}>Quantity</div>
              <QtyPicker />
            </div>
          </div>
          <div className={styles.footer}>
            <Button2 color="Dark" />
            <div className={styles.quantity}>Free shipping over $50</div>
          </div>
          <div className={styles.accordion}>
            {accordion2Items.map((item, index) => (
              <Accordion2
                key={index}
                open1={item.open1}
                accordionHeader={item.accordionHeader}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ImageLeftSection2;
