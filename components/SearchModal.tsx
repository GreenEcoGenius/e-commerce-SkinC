"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
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
  badge_variant: "red" | "dark" | null;
};

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const supabase = createClient();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      setSearched(false);
      return;
    }

    const timeout = setTimeout(async () => {
      setLoading(true);
      const { data } = await supabase
        .from("products")
        .select("*")
        .or(`name.ilike.%${query}%,category.ilike.%${query}%,description.ilike.%${query}%`)
        .limit(4);
      setResults(data || []);
      setSearched(true);
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
    <div className={styles.panel}>
      <div className={styles.inputWrapper}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.closeButton} onClick={onClose} aria-label="Close search">
          &times;
        </button>
      </div>

      {searched && !loading && results.length === 0 && (
        <p className={styles.noResults}>No matches found for &ldquo;{query}&rdquo;</p>
      )}

      {results.length > 0 && (
        <>
          <div className={styles.resultsGrid}>
            {results.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={`€${product.price.toFixed(2)}`}
                originalPrice={product.original_price ? `€${product.original_price.toFixed(2)}` : undefined}
                image={product.image}
              />
            ))}
          </div>
          <div className={styles.viewAllWrapper}>
            <Link href="/shop" className={styles.viewAllButton} onClick={onClose}>
              View all
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
