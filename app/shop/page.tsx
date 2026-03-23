"use client";
import { Suspense } from "react";
import Navigation from "../../components/Navigation";
import InstagramSection from "../../components/InstagramSection";
import Footer from "../../components/Footer";
import ShopContent from "./ShopContent";
import styles from "./page.module.css";

export default function ShopPage() {
  return (
    <div className={styles.page}>
      <Suspense fallback={<div className={styles.content}><h1 className={styles.title}>Shop</h1></div>}>
        <ShopContent />
      </Suspense>
      <InstagramSection />
      <Footer />
      <Navigation />
    </div>
  );
}
