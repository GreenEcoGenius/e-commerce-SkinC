"use client";
import { useState } from "react";
import Navigation from "../../components/Navigation";
import InstagramSection from "../../components/InstagramSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const faqSections = [
  { category: "Orders", items: [
    { q: "What payment methods do you accept?", a: "We accept Visa, Mastercard, PayPal, Apple Pay, Google Pay, and Klarna." },
    { q: "Can I cancel my order?", a: "You can cancel within 2 hours of placing your order. After that, production begins and cancellation is no longer possible." },
    { q: "Is my payment information secure?", a: "Yes. All transactions are encrypted with industry-standard SSL technology. We never store your full payment details." },
  ]},
  { category: "Shipping", items: [
    { q: "Where do you ship?", a: "We ship worldwide. Free shipping on orders over €100 within Europe." },
    { q: "How long does delivery take?", a: "Europe: 5–10 business days. North America: 7–14 business days. Rest of world: 10–20 business days. Print-on-demand items may add 2–5 additional days." },
    { q: "Can I track my order?", a: "Yes. You'll receive a confirmation email with tracking information once your order ships." },
  ]},
  { category: "Returns", items: [
    { q: "What is your return policy?", a: "We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in original condition with tags attached." },
    { q: "How do I return a product?", a: "Email contact@iseeyoufeel.com with your order number. We'll provide return instructions." },
    { q: "When will I receive my refund?", a: "Refunds are processed within 5–7 business days after we receive your return." },
  ]},
  { category: "Sizing & Product", items: [
    { q: "What sizes do you offer?", a: "XS to 3XL. Check our size guide for detailed measurements." },
    { q: "Are your products eco-friendly?", a: "We work with responsible suppliers and our print-on-demand model eliminates overproduction and excess inventory." },
  ]},
];

export default function FAQPage() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
        <div className={styles.faqList}>
          {faqSections.map((s, si) => (
            <div key={si} className={styles.faqSection}>
              <span className={styles.categoryLabel}>{s.category}</span>
              {s.items.map((item, fi) => {
                const key = `${si}-${fi}`;
                const isOpen = openKey === key;
                return (
                  <div key={key} className={styles.faqItem}>
                    <button className={styles.faqQuestion} onClick={() => setOpenKey(isOpen ? null : key)}>
                      {item.q}
                      <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && <p className={styles.faqAnswer}>{item.a}</p>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </main>
      <InstagramSection />
      <Footer />
      <Navigation />
    </div>
  );
}
