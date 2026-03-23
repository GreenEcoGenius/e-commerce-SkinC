import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Badge from "../../../components/Badge";
import InstagramSection from "../../../components/InstagramSection";
import SubscribeSection from "../../../components/SubscribeSection";
import Footer from "../../../components/Footer";
import styles from "./page.module.css";

const articles: Record<string, { title: string; badges: string[]; image: string; content: string[] }> = {
  "tips-natural-skincare-routine": {
    title: "Tips for building a natural skincare routine that lasts",
    badges: ["Tips", "Guide"],
    image: "/Image8@2x.png",
    content: [
      "Building a natural skincare routine doesn't have to be complicated. Start with the basics: a gentle cleanser, a hydrating toner, and a nourishing moisturizer. These three steps form the foundation of any effective routine.",
      "Choose products with ingredients you can recognize. Hyaluronic acid for hydration, botanical extracts for soothing, and glycerin for moisture retention are all excellent natural choices that work for most skin types.",
      "Consistency is key. Apply your products in the same order every morning and evening. Give each product at least 30 seconds to absorb before layering the next one.",
      "Don't forget sunscreen during the day. UV protection is the single most important step you can take for long-term skin health. Look for mineral sunscreens with zinc oxide for a natural option.",
      "Listen to your skin. If a product causes irritation, stop using it. Natural doesn't always mean gentle for everyone. Patch test new products on your inner wrist before applying them to your face.",
    ],
  },
  "science-behind-face-masks": {
    title: "Science behind effective face masks",
    badges: ["Science"],
    image: "/Image3@2x.png",
    content: [
      "Face masks work by creating an occlusive layer on the skin, which helps active ingredients penetrate more deeply than they would with regular application. This is why masks can deliver more dramatic results.",
      "Clay masks absorb excess oil and draw out impurities through adsorption. Bentonite and kaolin clays have a natural negative charge that attracts positively charged toxins and oils from your pores.",
      "Hydrating sheet masks use a fabric soaked in serum to deliver concentrated moisture. The mask prevents evaporation, allowing ingredients like hyaluronic acid to fully absorb into the skin over 15-20 minutes.",
      "Exfoliating masks containing AHAs or BHAs work by dissolving the bonds between dead skin cells, revealing smoother, brighter skin underneath. Use these masks no more than twice a week to avoid over-exfoliation.",
      "The best results come from matching your mask to your skin's current needs. Oily skin benefits from clay masks, dry skin needs hydration masks, and combination skin can alternate between both.",
    ],
  },
  "ingredients-glowing-skin": {
    title: "Ingredients for glowing skin explained",
    badges: ["Guide", "Insight"],
    image: "/Image9@2x.png",
    content: [
      "Vitamin C is one of the most powerful ingredients for achieving glowing skin. It brightens the complexion, evens out skin tone, and provides antioxidant protection against environmental damage.",
      "Niacinamide (Vitamin B3) strengthens the skin barrier, reduces redness, and minimizes the appearance of pores. It works well with most other active ingredients, making it versatile for any routine.",
      "Retinol accelerates cell turnover, helping to fade dark spots and smooth fine lines. Start with a low concentration and gradually increase to avoid irritation. Always use sunscreen when incorporating retinol.",
      "Peptides are amino acid chains that signal your skin to produce more collagen. They're gentle enough for sensitive skin and can be used both morning and night for anti-aging benefits.",
      "Alpha hydroxy acids (AHAs) like glycolic and lactic acid exfoliate the surface of the skin, improving texture and radiance. They also help other products absorb more effectively.",
    ],
  },
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <div className={styles.page}>
        <main className={styles.content}>
          <h1 className={styles.title}>Article not found</h1>
          <Link href="/journal" className={styles.backLink}>Back to journal</Link>
        </main>
        <Footer />
        <Navigation />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.heroWrapper}>
        <img className={styles.heroImage} alt="" src={article.image} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadges}>
            {article.badges.map((b) => (
              <Badge key={b} text={b} variant="gray" />
            ))}
          </div>
          <h1 className={styles.heroTitle}>{article.title}</h1>
        </div>
      </div>

      <main className={styles.articleContent}>
        {article.content.map((p, i) => (
          <p key={i} className={styles.paragraph}>{p}</p>
        ))}
      </main>

      <section className={styles.moreSection}>
        <h2 className={styles.moreTitle}>More to read</h2>
        <div className={styles.moreGrid}>
          {Object.entries(articles)
            .filter(([s]) => s !== slug)
            .slice(0, 3)
            .map(([s, a]) => (
              <Link key={s} href={`/journal/${s}`} className={styles.moreCard}>
                <img className={styles.moreImage} alt="" src={a.image} />
                <h3 className={styles.moreCardTitle}>{a.title}</h3>
              </Link>
            ))}
        </div>
      </section>

      <InstagramSection />
      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
