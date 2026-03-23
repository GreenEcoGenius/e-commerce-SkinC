import Link from "next/link";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    author: "Sara J.",
    quote: "\u201CThe Face Toner has transformed my morning routine with its natural hydration. Highly recommend!\u201D",
    productName: "Face Toner",
    productImage: "/Image16@2x.png",
  },
  {
    author: "Helen D.",
    quote: "\u201CThe Body Serum left my skin silky smooth after just one use. It\u2019s become my go-to for a natural glow every day!\u201D",
    productName: "Body Serum",
    productImage: "/Image15@2x.png",
  },
  {
    author: "Kim W.",
    quote: "\u201CThis Face Mask is a game-changer! My skin feels rejuvenated and looks brighter\u2014perfect for a quick self-care moment.\u201D",
    productName: "Face Mask",
    productImage: "/Image12@2x.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Testimonials</h2>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.author}>{t.author}</span>
            <p className={styles.quote}>{t.quote}</p>
            <Link href="/product" className={styles.productLink}>
              <img className={styles.productImage} alt={t.productName} src={t.productImage} />
              <div className={styles.productInfo}>
                <span className={styles.productName}>{t.productName}</span>
                <span className={styles.viewProduct}>View product</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
