import Navigation from "../components/Navigation";
import Button from "../components/Button";
import Badge from "../components/Badge";
import ProductCard from "../components/ProductCard";
import TestimonialsSection from "../components/TestimonialsSection";
import InstagramSection from "../components/InstagramSection";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroSubtitle}>Discover Nature&apos;s Finest Ingredients</span>
          <h1 className={styles.heroTitle}>Glow with nature&apos;s finest, every single day</h1>
          <Button label="Shop now" variant="bright" />
        </div>
      </section>

      {/* Best Sellers */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Best sellers</h2>
        <div className={styles.productsRow}>
          <ProductCard name="Face Toner" price="$47.99" originalPrice="$59.99" image="/Image14@3x.png" badge={{ text: "-20%", variant: "red" }} />
          <ProductCard name="Body Wash" price="$49.99" image="/Image6@2x.png" />
          <ProductCard name="Body Serum" price="$49.99" image="/Image13@3x.png" badge={{ text: "New", variant: "dark" }} />
          <ProductCard name="Face Mask" price="$49.99" image="/Image10@2x.png" />
        </div>
      </section>

      {/* Shop by Category */}
      <section className={styles.sectionFlush}>
        <h2 className={styles.sectionTitle}>Shop by category</h2>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryCard}>
            <img className={styles.categoryImage} alt="Creams" src="/Image@3x.png" />
            <div className={styles.categoryButton}><Button label="Creams" variant="bright" fullWidth /></div>
          </div>
          <div className={styles.categoryCard}>
            <img className={styles.categoryImage} alt="Serums" src="/Image1@3x.png" />
            <div className={styles.categoryButton}><Button label="Serums" variant="bright" fullWidth /></div>
          </div>
          <div className={styles.categoryCard}>
            <img className={styles.categoryImage} alt="Lotion" src="/Image2@3x.png" />
            <div className={styles.categoryButton}><Button label="Lotion" variant="bright" fullWidth /></div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.sectionFlush}>
        <h2 className={styles.sectionTitle}>Featured products</h2>
        <div className={styles.productsRow}>
          <ProductCard name="Face Toner" price="$47.99" originalPrice="$59.99" image="/Image14@3x.png" badge={{ text: "-20%", variant: "red" }} />
          <ProductCard name="Body Wash" price="$49.99" image="/Image6@2x.png" />
          <ProductCard name="Body Serum" price="$49.99" image="/Image13@3x.png" badge={{ text: "New", variant: "dark" }} />
          <ProductCard name="Face Mask" price="$49.99" image="/Image10@2x.png" />
        </div>
      </section>

      {/* Face Mask Promo */}
      <section className={styles.splitSection}>
        <div className={styles.splitContainer}>
          <img className={styles.splitImage} alt="Face mask" src="/Image21@2x.png" />
          <div className={styles.splitContent}>
            <h2 className={styles.splitTitle}>Hydrate &amp; revitalize with our pure face mask</h2>
            <p className={styles.splitDescription}>
              Indulge your skin with natural botanical extracts and oils. This mask hydrates, soothes, and restores glow for all skin types in minutes.
            </p>
            <Button label="Shop the face mask" variant="dark" />
          </div>
        </div>
      </section>

      {/* From the Journal */}
      <section className={styles.sectionFlush}>
        <h2 className={styles.sectionTitle}>From the journal</h2>
        <div className={styles.articleGrid}>
          <article className={styles.article}>
            <img className={styles.articleImage} alt="" src="/Image8@2x.png" />
            <div className={styles.articleBadges}>
              <Badge text="Tips" variant="gray" />
              <Badge text="Guide" variant="gray" />
            </div>
            <span className={styles.articleTitle}>Tips for a natural skincare routine</span>
            <span className={styles.articleLink}>Read more</span>
          </article>
          <article className={styles.article}>
            <img className={styles.articleImage} alt="" src="/Image3@2x.png" />
            <div className={styles.articleBadges}>
              <Badge text="Science" variant="gray" />
            </div>
            <span className={styles.articleTitle}>Science behind effective face masks</span>
            <span className={styles.articleLink}>Read more</span>
          </article>
          <article className={styles.article}>
            <img className={styles.articleImage} alt="" src="/Image9@2x.png" />
            <div className={styles.articleBadges}>
              <Badge text="Guide" variant="gray" />
              <Badge text="Insight" variant="gray" />
            </div>
            <span className={styles.articleTitle}>Ingredients for glowing skin explained</span>
            <span className={styles.articleLink}>Read more</span>
          </article>
        </div>
      </section>

      {/* 2 Items Grid */}
      <section className={styles.sectionFlush}>
        <div className={styles.twoItemsGrid}>
          <div className={styles.gridItem}>
            <img className={styles.gridItemImage} alt="" src="/Image31@3x.png" />
            <h3 className={styles.gridItemTitleWhite}>Glow with nature&apos;s best essence</h3>
            <Button label="Shop the essence" variant="bright" />
          </div>
          <div className={styles.gridItem}>
            <img className={styles.gridItemImage} alt="" src="/Image4@3x.png" />
            <h3 className={styles.gridItemTitleBlack}>Gift the glow</h3>
            <Button label="Get a gift card" variant="dark" />
          </div>
        </div>
      </section>

      {/* Full Image Section */}
      <section className={styles.fullImageSection}>
        <div className={styles.fullImageWrapper}>
          <img className={styles.fullImageBg} alt="" src="/Image-Wrapper@3x.png" />
          <div className={styles.fullImageContent}>
            <span className={styles.fullImageSubtitle}>Essence for a brighter complexion</span>
            <h2 className={styles.fullImageTitle}>Pure hydration in every drop</h2>
            <Button label="Shop now" variant="bright" />
          </div>
          <div className={styles.fullImageProduct}>
            <img className={styles.fullImageProductImg} alt="Face Toner" src="/Image16@2x.png" />
            <div className={styles.fullImageProductInfo}>
              <span>Face Toner</span>
              <div className={styles.fullImageProductPrice}>
                <span className={styles.fullImageProductOldPrice}>$59.99</span>
                <span>$47.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <InstagramSection />
      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
