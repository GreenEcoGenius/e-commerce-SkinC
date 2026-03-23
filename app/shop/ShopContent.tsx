"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "../../components/ProductCard";
import { products, filterProducts, formatPrice, Product } from "../../lib/products";
import styles from "./page.module.css";

const primaryFilters = [
  { label: "All", value: "all" },
  { label: "Women", value: "women" },
  { label: "Men", value: "men" },
  { label: "Accessories", value: "accessories" },
  { label: "ISYF Premium", value: "premium" },
  { label: "ISYF FEELS", value: "feels" },
];

const genderSubFilters = [
  { label: "All", value: "all" },
  { label: "ISYF Premium", value: "premium" },
  { label: "ISYF FEELS", value: "feels" },
  { label: "Sweats & Hoodies", value: "sweats" },
  { label: "T-shirts", value: "tshirts" },
];

const collectionSubFilters = [
  { label: "All", value: "all" },
  { label: "Women", value: "women" },
  { label: "Men", value: "men" },
];

function buildLabel(p: Product): string {
  const gender = p.category === "women" ? "Women" : p.category === "men" ? "Men" : "";
  const col = p.collection === "premium" ? "Premium" : p.collection === "feels" ? "FEELS" : "";
  return [gender, col].filter(Boolean).join(" — ") || p.label;
}

export default function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlCategory = searchParams.get("category") || undefined;
  const urlCollection = searchParams.get("collection") || undefined;
  const urlType = searchParams.get("type") || undefined;

  const [primary, setPrimary] = useState("all");
  const [sub, setSub] = useState("all");

  useEffect(() => {
    if (urlCategory || urlCollection || urlType) {
      if (urlCategory && !urlCollection && !urlType) {
        setPrimary(urlCategory);
        setSub("all");
      } else if (urlCollection && !urlCategory) {
        setPrimary(urlCollection);
        setSub("all");
      } else if (urlCategory && urlCollection) {
        setPrimary(urlCategory);
        setSub(urlCollection);
      } else if (urlCategory && urlType) {
        setPrimary(urlCategory);
        setSub(urlType);
      } else {
        setPrimary("all");
        setSub("all");
      }
    }
  }, [urlCategory, urlCollection, urlType]);

  const handlePrimary = useCallback((value: string) => {
    setPrimary(value);
    setSub("all");
    router.push("/shop", { scroll: false });
  }, [router]);

  const handleSub = useCallback((value: string) => {
    setSub(value);
  }, []);

  const isGenderFilter = primary === "women" || primary === "men";
  const isCollectionFilter = primary === "premium" || primary === "feels";
  const hasSubFilters = isGenderFilter || isCollectionFilter;

  const currentSubFilters = isGenderFilter
    ? genderSubFilters
    : isCollectionFilter
      ? collectionSubFilters
      : [];

  const filtered = useMemo(() => {
    if (primary === "all") return products;
    if (primary === "accessories") return products.filter((p) => p.category === "accessories");

    if (isGenderFilter) {
      let result = products.filter((p) => p.category === primary);
      if (sub === "premium" || sub === "feels") {
        result = result.filter((p) => p.collection === sub);
      } else if (sub === "sweats" || sub === "tshirts") {
        result = result.filter((p) => p.type === sub);
      }
      return result;
    }

    if (isCollectionFilter) {
      let result = products.filter((p) => p.collection === primary);
      if (sub === "women" || sub === "men") {
        result = result.filter((p) => p.category === sub);
      }
      return result;
    }

    return products;
  }, [primary, sub, isGenderFilter, isCollectionFilter]);

  const title = useMemo(() => {
    const parts: string[] = [];

    if (primary === "all") return "Shop";
    if (primary === "accessories") return "Accessories";

    if (isGenderFilter) {
      parts.push(primary === "women" ? "Women" : "Men");
      if (sub === "premium") parts.push("ISYF Premium");
      else if (sub === "feels") parts.push("ISYF FEELS");
      else if (sub === "sweats") parts.push("Sweats & Hoodies");
      else if (sub === "tshirts") parts.push("T-shirts");
    } else if (isCollectionFilter) {
      parts.push(primary === "premium" ? "ISYF Premium" : "ISYF FEELS");
      if (sub === "women") parts.push("Women");
      else if (sub === "men") parts.push("Men");
    }

    return parts.join(" — ");
  }, [primary, sub, isGenderFilter, isCollectionFilter]);

  return (
    <section className={styles.content}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.filterBar}>
        {primaryFilters.map((f) => (
          <button
            key={f.value}
            className={f.value === primary ? styles.filterBtnActive : styles.filterBtn}
            onClick={() => handlePrimary(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {hasSubFilters && (
        <div className={styles.subFilterBar}>
          {currentSubFilters.map((f) => (
            <button
              key={f.value}
              className={f.value === sub ? styles.subFilterBtnActive : styles.subFilterBtn}
              onClick={() => handleSub(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className={styles.productGrid}>
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <ProductCard
              key={p.slug}
              slug={p.slug}
              name={p.name}
              price={formatPrice(p.price)}
              image={p.image}
              label={buildLabel(p)}
            />
          ))
        ) : (
          <p className={styles.emptyText}>No products found in this category yet. Check back soon.</p>
        )}
      </div>
    </section>
  );
}
