import type { NextPage } from "next";
import Image from "next/image";
import Accordion from "./accordion";
import styles from "./image-left-section1.module.css";

export type ImageLeftSection1Type = {
  className?: string;
};

const ImageLeftSection1: NextPage<ImageLeftSection1Type> = ({
  className = "",
}) => {
  return (
    <main className={[styles.imageLeftSection, className].join(" ")}>
      <div className={styles.container}>
        <h1 className={styles.frequentlyAskedQuestions}>
          Frequently asked questions
        </h1>
        <section className={styles.theme}>
          <div className={styles.orders}>ORDERS</div>
          <div className={styles.accordionWrapper}>
            <Accordion open1 />
            <div className={styles.accordion}>
              <div className={styles.top}>
                <div className={styles.accordionHeader}>
                  Can I modify my order after placing it?
                </div>
                <Image
                  className={styles.addIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/add.svg"
                />
              </div>
            </div>
            <div className={styles.accordion}>
              <div className={styles.top}>
                <div className={styles.accordionHeader}>
                  How do I cancel my order?
                </div>
                <Image
                  className={styles.addIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/add.svg"
                />
              </div>
            </div>
            <div className={styles.accordion}>
              <div className={styles.top}>
                <div className={styles.accordionHeader}>
                  Is my payment information secure?
                </div>
                <Image
                  className={styles.addIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/add.svg"
                />
              </div>
            </div>
            <div className={styles.accordion}>
              <div className={styles.top}>
                <div className={styles.accordionHeader}>
                  Can I place an order over the phone?
                </div>
                <Image
                  className={styles.addIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/add.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.theme}>
          <div className={styles.orders}>Shipping</div>
          <div className={styles.accordionWrapper}>
            <div className={styles.accordion}>
              <div className={styles.top}>
                <div className={styles.accordionHeader}>
                  How long does shipping take?
                </div>
                <Image
                  className={styles.addIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/add.svg"
                />
              </div>
            </div>
            <div className={styles.accordion}>
              <div className={styles.top}>
                <div className={styles.accordionHeader}>
                  How much does shipping cost?
                </div>
                <Image
                  className={styles.addIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/add.svg"
                />
              </div>
            </div>
            <div className={styles.accordion}>
              <div className={styles.top}>
                <div className={styles.accordionHeader}>
                  Do you ship internationally?
                </div>
                <Image
                  className={styles.addIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/add.svg"
                />
              </div>
            </div>
            <div className={styles.accordion}>
              <div className={styles.top}>
                <div className={styles.accordionHeader}>
                  Can I track my order?
                </div>
                <Image
                  className={styles.addIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/add.svg"
                />
              </div>
            </div>
            <div className={styles.accordion}>
              <div className={styles.top}>
                <div className={styles.accordionHeader}>
                  What if my order arrives damaged?
                </div>
                <Image
                  className={styles.addIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/add.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.theme}>
          <div className={styles.orders}>{`Returns & Refunds`}</div>
          <div className={styles.accordionWrapper}>
            <div className={styles.accordion}>
              <div className={styles.top}>
                <div className={styles.accordionHeader}>
                  What is your return policy?
                </div>
                <Image
                  className={styles.addIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/add.svg"
                />
              </div>
            </div>
            <div className={styles.accordion}>
              <div className={styles.top}>
                <div className={styles.accordionHeader}>
                  How do I return a product?
                </div>
                <Image
                  className={styles.addIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/add.svg"
                />
              </div>
            </div>
            <div className={styles.accordion}>
              <div className={styles.top}>
                <div className={styles.accordionHeader}>
                  When will I receive my refund?
                </div>
                <Image
                  className={styles.addIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/add.svg"
                />
              </div>
            </div>
            <div className={styles.accordion}>
              <div className={styles.top}>
                <div className={styles.accordionHeader}>
                  Can I return a used product?
                </div>
                <Image
                  className={styles.addIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/add.svg"
                />
              </div>
            </div>
            <div className={styles.accordion}>
              <div className={styles.top}>
                <div className={styles.accordionHeader}>
                  What if I’m not satisfied with my purchase?
                </div>
                <Image
                  className={styles.addIcon}
                  loading="lazy"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/add.svg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ImageLeftSection1;
