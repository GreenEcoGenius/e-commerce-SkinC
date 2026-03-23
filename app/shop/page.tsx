"use client";
import { useState } from "react";
import Navigation from "../../components/Navigation";
import ProductCard from "../../components/ProductCard";
import InstagramSection from "../../components/InstagramSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const allProducts = [
  { name: "ISYF Essential Tee", price: "€35.00", image: "/product-tshirt.jpg", categories: ["women", "premium"] },
  { name: "ISYF Embroidered Hoodie", price: "€89.00", image: "/product-hoodie.jpg", categories: ["women", "premium"] },
  { name: "ISYF FEELS Message Tee", price: "€29.90", image: "/product-feels-tee.jpg", categories: ["men", "feels"] },
  { name: "ISYF Cap", price: "€39.00", image: "/product-cap.jpg", categories: ["accessories"] },
  { name: "ISYF Premium Sweater", price: "€95.00", image: "/product-hoodie.jpg", categories: ["men", "premium"] },
  { name: "ISYF Oversized Tee", price: "€42.00", image: "/product-tshirt.jpg", categories: ["women", "feels"] },
  { name: "ISYF FEELS Graphic Hoodie", price: "€69.00", image: "/product-feels-tee.jpg", categories: ["men", "feels"] },
  { name: "ISYF Tote Bag", price: "€25.00", image: "/product-tote.jpg", categories: ["accessories"] },
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
