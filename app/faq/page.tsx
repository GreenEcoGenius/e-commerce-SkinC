"use client";

import { useState } from "react";
import Navigation from "../../components/Navigation";
import InstagramSection from "../../components/InstagramSection";
import SubscribeSection from "../../components/SubscribeSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const faqSections = [
  {
    category: "Orders",
    items: [
      { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay for a seamless checkout experience." },
      { q: "Can I modify my order after placing it?", a: "You can modify your order within 1 hour of placing it. After that, the order enters fulfillment. Contact our support team as soon as possible." },
      { q: "How do I cancel my order?", a: "To cancel your order, contact us within 1 hour of purchase. Once the order has been processed, we cannot cancel it, but you can return it after delivery." },
      { q: "Is my payment information secure?", a: "Yes, all transactions are encrypted with industry-standard SSL technology. We never store your full credit card details on our servers." },
      { q: "Can I place an order over the phone?", a: "Currently, we only accept orders through our website. Our customer service team can assist you with any questions during the process." },
    ],
  },
  {
    category: "Shipping",
    items: [
      { q: "How long does shipping take?", a: "Standard shipping takes 3–5 business days. Express shipping delivers in 1–2 business days. International orders take 7–14 business days." },
      { q: "How much does shipping cost?", a: "Standard shipping is free on orders over $50. Orders under $50 have a flat $5.99 shipping fee. Express shipping starts at $15.00." },
      { q: "Do you ship internationally?", a: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination." },
      { q: "Can I track my order?", a: "Yes! Once your order ships, you'll receive a confirmation email with a tracking number and link to monitor your delivery." },
      { q: "What if my order arrives damaged?", a: "If your order arrives damaged, please contact us within 48 hours with photos. We'll send a replacement at no cost to you." },
    ],
  },
  {
    category: "Returning & Refunds",
    items: [
      { q: "What is your return policy?", a: "We accept returns within 30 days of delivery. Products must be unused and in their original packaging." },
      { q: "How do I return a product?", a: "Contact our support team to initiate a return. We'll provide a prepaid return label and instructions." },
      { q: "When will I receive my refund?", a: "Refunds are processed within 5–7 business days after we receive your return. The refund will be credited to your original payment method." },
      { q: "Can I return a used product?", a: "We cannot accept returns on used products unless the item is defective. Contact us if you believe your product is faulty." },
      { q: "What if I'm not satisfied with my purchase?", a: "Your satisfaction is our priority. If you're not happy, reach out to our team and we'll work with you to find a solution." },
    ],
  },
];

export default function FAQPage() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  function toggle(key: string) {
    setOpenKey(openKey === key ? null : key);
  }

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.pageTitle}>Frequently asked questions</h1>
        <div className={styles.faqList}>
          {faqSections.map((section, si) => (
            <div key={si} className={styles.faqSection}>
              <span className={styles.categoryLabel}>{section.category}</span>
              {section.items.map((item, fi) => {
                const key = `${si}-${fi}`;
                const isOpen = openKey === key;
                return (
                  <div key={key} className={styles.faqItem}>
                    <button className={styles.faqQuestion} onClick={() => toggle(key)}>
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
      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
