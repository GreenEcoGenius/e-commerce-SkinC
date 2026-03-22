import type { NextPage } from "next";
import Image from "next/image";
import Badge from "./badge";
import styles from "./products.module.css";

export type ProductsType = {
  className?: string;
};

const Products: NextPage<ProductsType> = ({ className = "" }) => {
  return (
    <section className={[styles.products, className].join(" ")}>
      <h2 className={styles.fromTheJournal}>From the journal</h2>
      <div className={styles.categoryWrapper}>
        <section className={styles.article}>
          <Image
            className={styles.imageIcon}
            loading="lazy"
            width={384}
            height={384}
            sizes="100vw"
            alt=""
            src="/Image8@2x.png"
          />
          <div className={styles.badges}>
            <Badge
              color="Gray"
              badgePosition="unset"
              badgeTop="unset"
              badgeRight="unset"
              badgeText="Tips"
            />
            <Badge
              color="Gray"
              badgePosition="unset"
              badgeTop="unset"
              badgeRight="unset"
              badgeText="Guide"
            />
          </div>
          <h3 className={styles.fromTheJournal}>
            Tips for a natural skincare routine
          </h3>
          <div className={styles.readMore}>Read more</div>
        </section>
        <section className={styles.article}>
          <Image
            className={styles.imageIcon}
            loading="lazy"
            width={384}
            height={384}
            sizes="100vw"
            alt=""
            src="/Image5@2x.png"
          />
          <div className={styles.badges2}>
            <Badge
              color="Gray"
              badgePosition="unset"
              badgeTop="unset"
              badgeRight="unset"
              badgeText="Science"
            />
          </div>
          <h3 className={styles.fromTheJournal}>
            Science behind effective face masks
          </h3>
          <div className={styles.readMore}>Read more</div>
        </section>
        <section className={styles.article}>
          <Image
            className={styles.imageIcon}
            loading="lazy"
            width={384}
            height={384}
            sizes="100vw"
            alt=""
            src="/Image9@2x.png"
          />
          <div className={styles.badges}>
            <Badge
              color="Gray"
              badgePosition="unset"
              badgeTop="unset"
              badgeRight="unset"
              badgeText="Guide"
            />
            <Badge
              color="Gray"
              badgePosition="unset"
              badgeTop="unset"
              badgeRight="unset"
              badgeText="Insight"
            />
          </div>
          <h3 className={styles.fromTheJournal}>
            Ingredients for glowing skin explained
          </h3>
          <div className={styles.readMore}>Read more</div>
        </section>
      </div>
    </section>
  );
};

export default Products;
