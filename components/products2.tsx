import type { NextPage } from "next";
import Badge2 from "./badge2";
import Product3 from "./product3";
import styles from "./products2.module.css";

export type Products2Type = {
  className?: string;
};

const Products2: NextPage<Products2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.products, className].join(" ")}>
      <h2 className={styles.youMightAlso}>You might also like</h2>
      <section className={styles.productsWrapper}>
        <div className={styles.product}>
          <div className={styles.image}>
            <Badge2 color="Red" badgeText="-20%" />
          </div>
          <div className={styles.productInfo}>
            <div className={styles.faceToner}>Face Toner</div>
            <div className={styles.price}>
              <div className={styles.priceValue}>$59.99</div>
              <div className={styles.discount}>$47.99</div>
            </div>
          </div>
        </div>
        <Product3 image="/Image6@2x.png" bodyWash="Body Wash" />
        <div className={styles.product2}>
          <div className={styles.image2}>
            <Badge2 color="Dark" badgeText="New" />
          </div>
          <div className={styles.productInfo2}>
            <div className={styles.faceToner}>Body Serum</div>
            <div className={styles.div}>$49.99</div>
          </div>
        </div>
        <Product3 image="/Image10@2x.png" bodyWash="Face Mask" />
      </section>
    </section>
  );
};

export default Products2;
