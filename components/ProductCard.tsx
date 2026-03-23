import Link from "next/link";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: { text: string; variant: "red" | "dark" | "gray" };
};

export default function ProductCard({ name, price, originalPrice, image }: ProductCardProps) {
  return (
    <Link href="/product" className={styles.product}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} alt={name} src={image} />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <div className={styles.priceRow}>
          {originalPrice && <span className={styles.originalPrice}>{originalPrice}</span>}
          <span className={styles.price}>{price}</span>
        </div>
      </div>
    </Link>
  );
}
