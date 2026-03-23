import Navigation from "../../components/Navigation";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard";
import InstagramSection from "../../components/InstagramSection";
import SubscribeSection from "../../components/SubscribeSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const rows = [
  [
    { name: "Body Wash", price: "$49.99", image: "/Image6@2x.png" },
    { name: "Body Serum", price: "$49.99", image: "/Image13@3x.png", badge: { text: "New" as const, variant: "dark" as const } },
    { name: "Face Mask", price: "$49.99", image: "/Image10@2x.png" },
  ],
  [
    { name: "Face Toner", price: "$47.99", originalPrice: "$59.99", image: "/Image14@3x.png", badge: { text: "-20%" as const, variant: "red" as const } },
    { name: "Body Wash", price: "$49.99", image: "/Image6@2x.png" },
    { name: "Body Serum", price: "$49.99", image: "/Image13@3x.png", badge: { text: "New" as const, variant: "dark" as const } },
  ],
  [
    { name: "Body Wash", price: "$49.99", image: "/Image6@2x.png" },
    { name: "Body Serum", price: "$49.99", image: "/Image13@3x.png", badge: { text: "New" as const, variant: "dark" as const } },
    { name: "Face Toner", price: "$47.99", originalPrice: "$59.99", image: "/Image14@3x.png", badge: { text: "-20%" as const, variant: "red" as const } },
  ],
  [
    { name: "Face Toner", price: "$47.99", originalPrice: "$59.99", image: "/Image14@3x.png", badge: { text: "-20%" as const, variant: "red" as const } },
    { name: "Body Wash", price: "$49.99", image: "/Image6@2x.png" },
    { name: "Face Mask", price: "$49.99", image: "/Image10@2x.png" },
  ],
];

export default function ShopPage() {
  return (
    <div className={styles.page}>
      <section className={styles.products}>
        <h1 className={styles.title}>All products</h1>
        <div className={styles.filterAndProducts}>
          <Filter />
          <div className={styles.productGrid}>
            {rows.map((row, i) => (
              <div key={i} className={styles.productRow}>
                {row.map((product, j) => (
                  <ProductCard key={j} {...product} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <InstagramSection />
      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
