"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { createClient } from "../lib/supabase";
import styles from "./SearchModal.module.css";

type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  original_price: number | null;
  image: string;
  badge_text: string | null;
};

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const supabase = createClient();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      setLoading(true);
      const { data } = await supabase
        .from("products")
        .select("*")
        .ilike("name", `%${query}%`)
        .limit(6);
      setResults(data || []);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.inputRow}>
          <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="8.5" cy="8.5" r="6" stroke="currentColor" strokeWidth="1.5" />
            <line x1="13" y1="13" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            className={styles.input}
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.closeButton} onClick={onClose}>Esc</button>
        </div>

        {loading && <p className={styles.status}>Searching...</p>}

        {!loading && query.trim().length > 0 && results.length === 0 && (
          <p className={styles.status}>No products found for &ldquo;{query}&rdquo;</p>
        )}

        {results.length > 0 && (
          <div className={styles.results}>
            {results.map((product) => (
              <Link
                key={product.id}
                href="/product"
                className={styles.resultItem}
                onClick={onClose}
              >
                <img className={styles.resultImage} alt={product.name} src={product.image} />
                <div className={styles.resultInfo}>
                  <span className={styles.resultCategory}>{product.category}</span>
                  <span className={styles.resultName}>{product.name}</span>
                  <div className={styles.resultPriceRow}>
                    <span className={styles.resultPrice}>${product.price.toFixed(2)}</span>
                    {product.original_price && (
                      <span className={styles.resultOriginalPrice}>${product.original_price.toFixed(2)}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
