import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    author: "Sara J.",
    quote: "\u201CThe embroidered hoodie is the softest thing I've ever worn. The quality is unreal.\u201D",
  },
  {
    author: "Alex M.",
    quote: "\u201CI love that every piece has a message. ISYF FEELS tees are my go-to.\u201D",
  },
  {
    author: "Kim L.",
    quote: "\u201CFinally a brand that gets it. Premium quality without the pretentious price tag.\u201D",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>WHAT THEY SAY</h2>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.quote}>{t.quote}</p>
            <span className={styles.author}>{t.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
