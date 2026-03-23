import Navigation from "../components/Navigation";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import InstagramSection from "../components/InstagramSection";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.announcementBar}>
        FREE WORLDWIDE SHIPPING ON ORDERS OVER &euro;100
      </div>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>I SEE, YOU FEEL.</h1>
          <span className={styles.heroSubtitle}>WEAR WHAT YOU FEEL</span>
          <Button label="EXPLORE" variant="bright" href="/shop" />
        </div>
      </section>

      <section className={styles.collectionsGrid}>
        <div className={styles.collectionCard}>
          <div className={styles.collectionImage} style={{ backgroundImage: "url(/collection-women.jpg)" }} />
          <div className={styles.collectionOverlay}>
            <h2 className={styles.collectionTitle}>WOMEN</h2>
            <Button label="SHOP WOMEN" variant="bright" href="/shop?category=women" />
          </div>
        </div>
        <div className={styles.collectionCard}>
          <div className={styles.collectionImage} style={{ backgroundImage: "url(/collection-men.jpg)" }} />
          <div className={styles.collectionOverlay}>
            <h2 className={styles.collectionTitle}>MEN</h2>
            <Button label="SHOP MEN" variant="bright" href="/shop?category=men" />
          </div>
        </div>
      </section>

      <section className={styles.brandStory}>
        <div className={styles.brandStoryImage} style={{ backgroundImage: "url(/brand-story.jpg)" }} />
        <div className={styles.brandStoryContent}>
          <h2 className={styles.brandStoryTitle}>What I see, you feel.</h2>
          <p className={styles.brandStoryText}>
            Every piece we create carries an emotion. Every design tells a story. I SEE, YOU FEEL. is more than a brand &mdash; it&apos;s a way to express what words cannot.
          </p>
          <a href="/our-story" className={styles.textLink}>Read our story &rarr;</a>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>THE SELECTION</h2>
        <p className={styles.sectionSubtitle}>Our curated picks</p>
        <div className={styles.productsRow}>
          <ProductCard name="ISYF Essential Tee" price="€35.00" image="/product-tshirt.jpg" />
          <ProductCard name="ISYF Embroidered Hoodie" price="€89.00" image="/product-hoodie.jpg" />
          <ProductCard name="ISYF FEELS Message Tee" price="€29.90" image="/product-feels-tee.jpg" />
          <ProductCard name="ISYF Cap" price="€39.00" image="/product-cap.jpg" />
        </div>
      </section>

      <section className={styles.categoriesGrid}>
        <div className={styles.categoryCard}>
          <div className={styles.categoryImage} style={{ backgroundImage: "url(/cat-premium.jpg)" }} />
          <div className={styles.categoryOverlay}>
            <h3 className={styles.categoryTitle}>ISYF PREMIUM</h3>
            <Button label="DISCOVER" variant="bright" href="/shop" />
          </div>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.categoryImage} style={{ backgroundImage: "url(/cat-feels.jpg)" }} />
          <div className={styles.categoryOverlay}>
            <h3 className={styles.categoryTitle}>ISYF FEELS</h3>
            <Button label="DISCOVER" variant="bright" href="/shop" />
          </div>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.categoryImage} style={{ backgroundImage: "url(/cat-accessories.jpg)" }} />
          <div className={styles.categoryOverlay}>
            <h3 className={styles.categoryTitle}>ACCESSORIES</h3>
            <Button label="DISCOVER" variant="bright" href="/shop" />
          </div>
        </div>
      </section>

      <section className={styles.fullBanner}>
        <div className={styles.fullBannerOverlay} />
        <div className={styles.fullBannerContent}>
          <span className={styles.fullBannerSubtitle}>Every design carries a message</span>
          <h2 className={styles.fullBannerTitle}>FEEL SOMETHING</h2>
          <Button label="SHOP NOW" variant="bright" href="/shop" />
        </div>
      </section>

      <section className={styles.valuesSection}>
        <h2 className={styles.valuesSectionTitle}>OUR COMMITMENTS</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Crafted with emotion</h3>
            <p className={styles.valueText}>Each piece tells a story. Our designs are born from real feelings and meaningful messages.</p>
          </div>
          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Eco-conscious</h3>
            <p className={styles.valueText}>We partner with responsible suppliers and choose sustainable materials whenever possible.</p>
          </div>
          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Worldwide delivery</h3>
            <p className={styles.valueText}>Free shipping on orders over &euro;100. We deliver to Europe, North America, and beyond.</p>
          </div>
        </div>
      </section>

      <InstagramSection />

      <section className={styles.newsletter}>
        <h2 className={styles.newsletterTitle}>JOIN THE FEELING</h2>
        <p className={styles.newsletterText}>Subscribe to receive exclusive drops, early access, and stories from the ISYF universe.</p>
        <div className={styles.newsletterInput}>
          <input type="email" placeholder="Enter your email" className={styles.emailField} />
          <button className={styles.emailSubmit}>&rarr;</button>
        </div>
      </section>

      <Footer />
      <Navigation />
    </div>
  );
}
