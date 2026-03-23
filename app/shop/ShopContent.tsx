"use client";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "../../components/ProductCard";
import { products, filterProducts, formatPrice } from "../../lib/products";
import styles from "./page.module.css";

const filters = [
  { label: "All", value: "all" },
  { label: "Women", value: "women" },
  { label: "Men", value: "men" },
  { label: "Accessories", value: "accessories" },
  { label: "ISYF Premium", value: "premium" },
  { label: "ISYF FEELS", value: "feels" },
];

function getTitle(category?: string, collection?: string, type?: string): string {
  const parts: string[] = [];
  if (category) parts.push(category.charAt(0).toUpperCase() + category.slice(1));
  if (collection) parts.push(collection === "premium" ? "ISYF Premium" : "ISYF FEELS");
  if (type) {
    const typeLabels: Record<string, string> = {
      sweats: "Sweats & Hoodies",
      tshirts: "T-shirts",
      limited: "Limited Drops",
      new: "New Arrivals",
    };
    parts.push(typeLabels[type] || type);
  }
  return parts.length > 0 ? parts.join(" — ") : "Shop";
}

export default function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlCategory = searchParams.get("category") || undefined;
  const urlCollection = searchParams.get("collection") || undefined;
  const urlType = searchParams.get("type") || undefined;
  const hasUrlParams = !!(urlCategory || urlCollection || urlType);

  const [activeFilter, setActiveFilter] = useState(hasUrlParams ? "url" : "all");

  useEffect(() => {
    setActiveFilter(hasUrlParams ? "url" : "all");
  }, [hasUrlParams, urlCategory, urlCollection, urlType]);

  const filtered = useMemo(() => {
    if (activeFilter === "url" && hasUrlParams) {
      return filterProducts({ category: urlCategory, collection: urlCollection, type: urlType });
    }
    if (activeFilter === "all") return products;
    if (activeFilter === "premium" || activeFilter === "feels") {
      return products.filter((p) => p.collection === activeFilter);
    }
    return products.filter((p) => p.category === activeFilter);
  }, [activeFilter, urlCategory, urlCollection, urlType, hasUrlParams]);

  function handleFilter(value: string) {
    setActiveFilter(value);
    if (value !== "url") {
      router.push("/shop", { scroll: false });
    }
  }

  const title = activeFilter === "url"
    ? getTitle(urlCategory, urlCollection, urlType)
    : activeFilter === "all"
      ? "Shop"
      : filters.find((f) => f.value === activeFilter)?.label || "Shop";

  return (
    <section className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.filterBar}>
        {filters.map((f) => (
          <button
            key={f.value}
            className={
              f.value === activeFilter || (f.value === "all" && activeFilter === "url" && !hasUrlParams)
                ? styles.filterBtnActive
                : styles.filterBtn
            }
            onClick={() => handleFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className={styles.productGrid}>
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <ProductCard key={p.slug} slug={p.slug} name={p.name} price={formatPrice(p.price)} image={p.image} />
          ))
        ) : (
          <p className={styles.emptyText}>No products found in this category yet. Check back soon.</p>
        )}
      </div>
    </section>
  );
}
