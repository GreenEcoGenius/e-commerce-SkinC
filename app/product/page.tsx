import Navigation from "../../components/Navigation";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";
import InstagramSection from "../../components/InstagramSection";
import SubscribeSection from "../../components/SubscribeSection";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export default function ProductPage() {
  return (
    <div className={styles.page}>
      {/* Product Details */}
      <section className={styles.productSection}>
        <div className={styles.productContainer}>
          <div className={styles.thumbnails}>
            <img className={styles.mainImage} alt="Pure Solution Essence" src="/Image19@3x.png" />
            <div className={styles.thumbRow}>
              <img className={styles.thumb} alt="" src="/Image19@3x.png" />
              <img className={styles.thumb} alt="" src="/Image18@3x.png" />
              <img className={styles.thumb} alt="" src="/Image17@3x.png" />
              <img className={styles.thumb} alt="" src="/Image161@3x.png" />
            </div>
          </div>
          <div className={styles.details}>
            <div>
              <span className={styles.productCategory}>Face</span>
              <h1 className={styles.productName}>Pure Solution Essence</h1>
              <span className={styles.productPrice}>$49.99</span>
            </div>
            <p className={styles.productDescription}>
              Elevate your skincare with Pure Solution Essence, a lightweight formula infused with potent actives targeting blemishes and restoring radiance. Perfect for all skin types, it hydrates and balances for a natural glow.
            </p>
            <div className={styles.optionGroup}>
              <span className={styles.optionLabel}>Size</span>
              <div className={styles.sizeOptions}>
                <span className={styles.sizeOptionActive}>100 ml</span>
                <span className={styles.sizeOption}>150 ml</span>
                <span className={styles.sizeOption}>200 ml</span>
              </div>
            </div>
            <div className={styles.optionGroup}>
              <span className={styles.optionLabel}>Quantity</span>
              <div className={styles.qtyPicker}>
                <button className={styles.qtyButton}>&ndash;</button>
                <span className={styles.qtyValue}>1</span>
                <button className={styles.qtyButton}>+</button>
              </div>
            </div>
            <div>
              <div className={styles.addToBag}>
                <Button label="Add to bag" variant="solid" fullWidth />
              </div>
              <p className={styles.freeShipping}>Free shipping over $50</p>
            </div>
            <div className={styles.accordionList}>
              <div className={styles.accordion}>
                <span className={styles.accordionLabel}>Description</span>
                <span className={styles.accordionIcon}>+</span>
              </div>
              <div className={styles.accordion}>
                <span className={styles.accordionLabel}>How to use</span>
                <span className={styles.accordionIcon}>+</span>
              </div>
              <div className={styles.accordion}>
                <span className={styles.accordionLabel}>Ingredients</span>
                <span className={styles.accordionIcon}>+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Glow Ritual */}
      <section className={styles.ritualSection}>
        <div className={styles.ritualContainer}>
          <div className={styles.ritualText}>
            <h2 className={styles.ritualTitle}>Your daily glow ritual</h2>
            <p className={styles.ritualDescription}>
              Apply 2-3 drops of Pure Solution Essence to freshly cleansed skin, then gently pat with your fingertips until fully absorbed. Use this step to kickstart your morning or night routine for a noticeable glow.
            </p>
          </div>
          <img className={styles.ritualImage} alt="" src="/Image34@2x.png" />
        </div>
      </section>

      {/* Key Ingredients */}
      <section className={styles.ingredientsSection}>
        <h2 className={styles.ingredientsTitle}>Key ingredients</h2>
        <div className={styles.ingredientsGrid}>
          <div className={styles.ingredientCard}>
            <img className={styles.ingredientImage} alt="" src="/Image22@2x.png" />
            <h3 className={styles.ingredientName}>Hyaluronic acid</h3>
            <p className={styles.ingredientDesc}>A powerful humectant that deeply hydrates and plumps the skin, helping to retain moisture and improve elasticity for a smoother complexion.</p>
          </div>
          <div className={styles.ingredientCard}>
            <img className={styles.ingredientImage} alt="" src="/Image23@2x.png" />
            <h3 className={styles.ingredientName}>Botanical extracts</h3>
            <p className={styles.ingredientDesc}>Natural plant-based ingredients that soothe and nourish, offering antioxidant benefits to protect skin and enhance its natural radiance.</p>
          </div>
          <div className={styles.ingredientCard}>
            <img className={styles.ingredientImage} alt="" src="/Image23@2x.png" />
            <h3 className={styles.ingredientName}>Glycerin</h3>
            <p className={styles.ingredientDesc}>A gentle moisturizing agent that draws water into the skin, supporting hydration and leaving it soft and supple with regular use.</p>
          </div>
        </div>
      </section>

      {/* You Might Also Like */}
      <section className={styles.relatedSection}>
        <h2 className={styles.relatedTitle}>You might also like</h2>
        <div className={styles.relatedRow}>
          <ProductCard name="Face Toner" price="$47.99" originalPrice="$59.99" image="/Image14@3x.png" badge={{ text: "-20%", variant: "red" }} />
          <ProductCard name="Body Wash" price="$49.99" image="/Image6@2x.png" />
          <ProductCard name="Body Serum" price="$49.99" image="/Image13@3x.png" badge={{ text: "New", variant: "dark" }} />
          <ProductCard name="Face Mask" price="$49.99" image="/Image10@2x.png" />
        </div>
      </section>

      <InstagramSection />
      <SubscribeSection />
      <Footer />
      <Navigation />
    </div>
  );
}
