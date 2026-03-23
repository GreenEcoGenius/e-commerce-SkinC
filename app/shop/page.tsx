"use client";

import { useState } from "react";
import Navigation from "../../components/Navigation";
import ProductCard from "../../components/ProductCard";
import InstagramSection from "../../components/InstagramSection";
import SubscribeSection from "../../components/SubscribeSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const allProducts = [
  { name: "Face Toner", price: "$47.99", originalPrice: "$59.99", image: "/Image14@3x.png", badge: { text: "-20%" as const, variant: "red" as const }, category: "Face" },
  { name: "Body Wash", price: "$49.99", image: "/Image6@2x.png", category: "Body" },
  { name: "Body Serum", price: "$49.99", image: "/Image13@3x.png", badge: { text: "New" as const, variant: "dark" as const }, category: "Body" },
  { name: "Face Mask", price: "$49.99", image: "/Image10@2x.png", category: "Face" },
  { name: "Pure Solution Essence", price: "$49.99", image: "/Image19@3x.png", category: "Face" },
  { name: "Hydrating Cream", price: "$54.99", image: "/Image22@2x.png", badge: { text: "New" as const, variant: "dark" as const }, category: "Face" },
  { name: "Body Lotion", price: "$39.99", image: "/Image23@2x.png", category: "Body" },
  { name: "Cleansing Oil", price: "$44.99", originalPrice: "$54.99", image: "/Image34@2x.png", badge: { text: "-18%" as const, variant: "red" as const }, category: "Face" },
];

const categories = ["All", "Face", "Body"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className={styles.page}>
      <section className={styles.products}>
        <h1 className={styles.title}>All products</h1>
        <div className={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === activeCategory ? styles.filterBtnActive : styles.filterBtn}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className={styles.productGrid}>
          {filtered.map((product, i) => (
            <ProductCard key={i} name={product.name} price={product.price} originalPrice={product.originalPrice} image={product.image} badge={product.badge} />
          ))}
        </div>
      </section>
      <InstagramSection />
      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
