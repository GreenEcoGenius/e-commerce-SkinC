"use client";
import { useState } from "react";
import Navigation from "../../components/Navigation";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";
import InstagramSection from "../../components/InstagramSection";
import Footer from "../../components/Footer";
import { useCart } from "../../lib/cart-context";
import styles from "./page.module.css";

const sizes = ["XS", "S", "M", "L", "XL", "2XL"];

export default function ProductPage() {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAddToBag() {
    for (let i = 0; i < qty; i++) {
      addItem({ id: `isyf-essential-tee-${selectedSize}`, name: "ISYF Essential Tee", size: selectedSize, price: 35, image: "/Image6@2x.png" });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className={styles.page}>
      <section className={styles.productSection}>
        <div className={styles.productContainer}>
          <div className={styles.thumbnails}>
            <div className={styles.mainImage}><img className={styles.mainImg} alt="ISYF Essential Tee" src="/Image6@2x.png" /></div>
          </div>
          <div className={styles.details}>
            <span className={styles.productCategory}>ISYF Premium</span>
            <h1 className={styles.productName}>ISYF Essential Tee</h1>
            <span className={styles.productPrice}>&euro;35.00</span>
            <p className={styles.productDescription}>A wardrobe essential, elevated. Our signature tee features premium organic cotton, embroidered ISYF logo, and a relaxed contemporary fit that feels as good as it looks.</p>
            <div className={styles.optionGroup}>
              <span className={styles.optionLabel}>Size</span>
              <div className={styles.sizeOptions}>
                {sizes.map((s) => (
                  <span key={s} className={s === selectedSize ? styles.sizeOptionActive : styles.sizeOption} onClick={() => setSelectedSize(s)}>{s}</span>
                ))}
              </div>
            </div>
            <div className={styles.optionGroup}>
              <span className={styles.optionLabel}>Quantity</span>
              <div className={styles.qtyPicker}>
                <button className={styles.qtyButton} onClick={() => setQty(Math.max(1, qty - 1))}>&ndash;</button>
                <span className={styles.qtyValue}>{qty}</span>
                <button className={styles.qtyButton} onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>
            <div className={styles.addToBag} onClick={handleAddToBag}>
              <Button label={added ? "ADDED!" : "ADD TO BAG"} variant="solid" fullWidth />
            </div>
            <p className={styles.freeShipping}>Free shipping over &euro;100</p>
            <div className={styles.accordionList}>
              <div className={styles.accordion}><span>Description</span><span>+</span></div>
              <div className={styles.accordion}><span>Shipping</span><span>+</span></div>
              <div className={styles.accordion}><span>Size Guide</span><span>+</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <h2 className={styles.relatedTitle}>You might also like</h2>
        <div className={styles.relatedRow}>
          <ProductCard name="ISYF Embroidered Hoodie" price="€89.00" image="/Image13@3x.png" />
          <ProductCard name="ISYF FEELS Message Tee" price="€29.90" image="/Image14@3x.png" />
          <ProductCard name="ISYF Cap" price="€39.00" image="/Image10@2x.png" />
          <ProductCard name="ISYF Premium Sweater" price="€95.00" image="/Image19@3x.png" />
        </div>
      </section>

      <InstagramSection />
      <Footer />
      <Navigation />
    </div>
  );
}
