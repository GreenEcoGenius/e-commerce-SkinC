"use client";

import { useState } from "react";
import Navigation from "../../components/Navigation";
import SubscribeSection from "../../components/SubscribeSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const faqs = [
  {
    question: "What ingredients do you use in your products?",
    answer:
      "All our products are formulated with naturally-derived ingredients like hyaluronic acid, botanical extracts, glycerin, and essential oils. We never use parabens, sulfates, or synthetic fragrances.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3–5 business days within the US. Express shipping is available at checkout for 1–2 business day delivery. International orders typically arrive in 7–14 business days.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes! We offer free standard shipping on all orders over $50. No promo code needed — the discount is applied automatically at checkout.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of delivery. Products must be unused and in their original packaging. Once we receive the return, refunds are processed within 5–7 business days.",
  },
  {
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely. None of our products are tested on animals, and we only partner with suppliers who share our commitment to cruelty-free practices.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "You can modify or cancel your order within 1 hour of placing it. After that, the order enters our fulfillment process. Please contact our support team as soon as possible if you need changes.",
  },
  {
    question: "How do I know which products are right for my skin type?",
    answer:
      "Each product page includes a skin type recommendation. If you're unsure, reach out to our support team and we'll help you build a personalized routine based on your needs.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.pageTitle}>Frequently asked questions</h1>
        <p className={styles.subtitle}>
          Everything you need to know about our products, orders, and policies.
        </p>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.question}
                <span className={styles.faqIcon}>{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && <p className={styles.faqAnswer}>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </main>
      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
