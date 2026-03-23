import Link from "next/link";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  slug?: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  label?: string;
};

export default function ProductCard({ slug, name, price, originalPrice, image, label }: ProductCardProps) {
  const href = slug ? `/product/${slug}` : "/shop";

  return (
    <Link href={href} className={styles.product}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} alt={name} src={image} />
      </div>
      <div className={styles.info}>
        {label && <span className={styles.label}>{label}</span>}
        <span className={styles.name}>{name}</span>
        <div className={styles.priceRow}>
          {originalPrice && <span className={styles.originalPrice}>{originalPrice}</span>}
          <span className={styles.price}>{price}</span>
        </div>
      </div>
    </Link>
  );
}
