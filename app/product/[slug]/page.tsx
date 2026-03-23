"use client";
import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Navigation from "../../../components/Navigation";
import Button from "../../../components/Button";
import ProductCard from "../../../components/ProductCard";
import InstagramSection from "../../../components/InstagramSection";
import Footer from "../../../components/Footer";
import { useCart } from "../../../lib/cart-context";
import { getProductBySlug, getRelatedProducts, formatPrice } from "../../../lib/products";
import styles from "../page.module.css";

const sizes = ["XS", "S", "M", "L", "XL", "2XL"];

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  if (!product) {
    return notFound();
  }

  const p = product;
  const related = getRelatedProducts(slug, 4);

  function handleAddToBag() {
    for (let i = 0; i < qty; i++) {
      addItem({
        id: `${p.slug}-${selectedSize}`,
        name: p.name,
        size: selectedSize,
        price: p.price,
        image: p.image,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className={styles.page}>
      <section className={styles.productSection}>
        <div className={styles.productContainer}>
          <div className={styles.thumbnails}>
            <div className={styles.mainImage}>
              <img className={styles.mainImg} alt={p.name} src={p.image} />
            </div>
          </div>
          <div className={styles.details}>
            <span className={styles.productCategory}>{p.label}</span>
            <h1 className={styles.productName}>{p.name}</h1>
            <span className={styles.productPrice}>{formatPrice(p.price)}</span>
            <p className={styles.productDescription}>{p.description}</p>

            {p.category !== "accessories" && (
              <div className={styles.optionGroup}>
                <span className={styles.optionLabel}>Size</span>
                <div className={styles.sizeOptions}>
                  {sizes.map((s) => (
                    <span
                      key={s}
                      className={s === selectedSize ? styles.sizeOptionActive : styles.sizeOption}
                      onClick={() => setSelectedSize(s)}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

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
              <div className={styles.accordion} onClick={() => setOpenAccordion(openAccordion === "desc" ? null : "desc")}>
                <span>Description</span><span>{openAccordion === "desc" ? "−" : "+"}</span>
              </div>
              {openAccordion === "desc" && (
                <div className={styles.accordionContent}>{p.description}</div>
              )}
              <div className={styles.accordion} onClick={() => setOpenAccordion(openAccordion === "ship" ? null : "ship")}>
                <span>Shipping</span><span>{openAccordion === "ship" ? "−" : "+"}</span>
              </div>
              {openAccordion === "ship" && (
                <div className={styles.accordionContent}>
                  Free shipping on orders over €100. Europe: 5–10 business days. North America: 7–14 business days. Rest of world: 10–20 business days.
                </div>
              )}
              <div className={styles.accordion} onClick={() => setOpenAccordion(openAccordion === "size" ? null : "size")}>
                <span>Size Guide</span><span>{openAccordion === "size" ? "−" : "+"}</span>
              </div>
              {openAccordion === "size" && (
                <div className={styles.accordionContent}>
                  Our pieces run true to size with a relaxed fit. For an oversized look, size up. Check our full size guide for detailed measurements.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>You might also like</h2>
          <div className={styles.relatedRow}>
            {related.map((p) => (
              <ProductCard key={p.slug} slug={p.slug} name={p.name} price={formatPrice(p.price)} image={p.image} />
            ))}
          </div>
        </section>
      )}

      <InstagramSection />
      <Footer />
      <Navigation />
    </div>
  );
}
