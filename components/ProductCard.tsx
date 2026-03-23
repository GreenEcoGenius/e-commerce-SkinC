import Link from "next/link";
import Badge from "./Badge";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: { text: string; variant: "red" | "dark" | "gray" };
};

export default function ProductCard({ name, price, originalPrice, image, badge }: ProductCardProps) {
  return (
    <Link href="/product" className={styles.product} style={{ textDecoration: "none" }}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} alt={name} src={image} />
        {badge && <Badge text={badge.text} variant={badge.variant} floating />}
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        {originalPrice ? (
          <div className={styles.priceWrapper}>
            <span className={styles.originalPrice}>{originalPrice}</span>
            <span className={styles.salePrice}>{price}</span>
          </div>
        ) : (
          <span className={styles.singlePrice}>{price}</span>
        )}
      </div>
    </Link>
  );
}
