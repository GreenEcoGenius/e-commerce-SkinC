"use client";
import { useState } from "react";
import Navigation from "../../components/Navigation";
import ProductCard from "../../components/ProductCard";
import InstagramSection from "../../components/InstagramSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const allProducts = [
  { name: "ISYF Essential Tee", price: "€35.00", image: "/Image6@2x.png", categories: ["women", "premium"] },
  { name: "ISYF Embroidered Hoodie", price: "€89.00", image: "/Image13@3x.png", categories: ["women", "premium"] },
  { name: "ISYF FEELS Message Tee", price: "€29.90", image: "/Image14@3x.png", categories: ["men", "feels"] },
  { name: "ISYF Cap", price: "€39.00", image: "/Image10@2x.png", categories: ["accessories"] },
  { name: "ISYF Premium Sweater", price: "€95.00", image: "/Image19@3x.png", categories: ["men", "premium"] },
  { name: "ISYF Oversized Tee", price: "€42.00", image: "/Image22@2x.png", categories: ["women", "feels"] },
  { name: "ISYF FEELS Graphic Hoodie", price: "€69.00", image: "/Image23@2x.png", categories: ["men", "feels"] },
  { name: "ISYF Tote Bag", price: "€25.00", image: "/Image34@2x.png", categories: ["accessories"] },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Women", value: "women" },
  { label: "Men", value: "men" },
  { label: "Accessories", value: "accessories" },
  { label: "ISYF Premium", value: "premium" },
  { label: "ISYF FEELS", value: "feels" },
];

export default function ShopPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? allProducts : allProducts.filter((p) => p.categories.includes(active));

  return (
    <div className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.title}>Shop</h1>
        <div className={styles.filterBar}>
          {filters.map((f) => (
            <button key={f.value} className={f.value === active ? styles.filterBtnActive : styles.filterBtn} onClick={() => setActive(f.value)}>{f.label}</button>
          ))}
        </div>
        <div className={styles.productGrid}>
          {filtered.map((p, i) => <ProductCard key={i} name={p.name} price={p.price} image={p.image} />)}
        </div>
      </section>
      <InstagramSection />
      <Footer />
      <Navigation />
    </div>
  );
}
