import type { NextPage } from "next";
import Image from "next/image";
import Button1 from "../components/button2";
import Badge from "../components/badge";
import Product from "../components/product";
import ImageLeftSection from "../components/image-left-section";
import Products from "../components/products";
import FullImageSection from "../components/full-image-section";
import TestimonialsSection from "../components/testimonials-section";
import InstagramSection from "../components/instagram-section";
import ImageWrapper from "../components/image-wrapper";
import Footer1 from "../components/footer3";
import SkinClinicLogo1 from "../components/skin-clinic-logo3";
import GlobalNavigationDesktop1 from "../components/global-navigation-desktop3";
import styles from "./desktop2.module.css";

const Desktop2: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <main className={styles.hero}>
        <div className={styles.heroOffer}>
          <div className={styles.text}>
            <div className={styles.discoverNaturesFinest}>
              Discover Nature’s Finest Ingredients
            </div>
            <h1 className={styles.glowWithNatures}>
              Glow with nature’s finest, every single day
            </h1>
          </div>
          <Button1 color="Bright" buttonLabel="Shop now" />
        </div>
      </main>
      <section className={styles.products}>
        <h1 className={styles.bestSellers}>Best sellers</h1>
        <section className={styles.productsWrapper}>
          <div className={styles.product}>
            <div className={styles.image}>
              <Badge color="Red" badgeText="-20%" />
            </div>
            <div className={styles.productInfo}>
              <div className={styles.faceToner}>Face Toner</div>
              <div className={styles.price}>
                <div className={styles.priceSymbol}>$59.99</div>
                <div className={styles.priceValue}>$47.99</div>
              </div>
            </div>
          </div>
          <Product image="/Image6@2x.png" bodyWash="Body Wash" />
          <div className={styles.product}>
            <div className={styles.image2}>
              <Badge
                color="Dark"
                badgePosition="absolute"
                badgeTop="16px"
                badgeRight="16px"
                badgeText="New"
              />
            </div>
            <div className={styles.productInfo}>
              <div className={styles.faceToner}>Body Serum</div>
              <div className={styles.serumPrice}>$49.99</div>
            </div>
          </div>
          <Product image="/Image10@2x.png" bodyWash="Face Mask" />
        </section>
      </section>
      <section className={styles.categorySection}>
        <h2 className={styles.bestSellers}>Shop by category</h2>
        <div className={styles.categoryWrapper}>
          <section className={styles.imageWrapper}>
            <div className={styles.category}>
              <div className={styles.image3}>
                <Button1
                  color="Bright"
                  buttonAlignSelf="stretch"
                  buttonLabel="Creams"
                />
              </div>
            </div>
          </section>
          <section className={styles.imageWrapper}>
            <div className={styles.category}>
              <div className={styles.image4}>
                <Button1
                  color="Bright"
                  buttonAlignSelf="stretch"
                  buttonLabel="Serums"
                />
              </div>
            </div>
          </section>
          <section className={styles.imageWrapper}>
            <div className={styles.category}>
              <div className={styles.image5}>
                <Button1
                  color="Bright"
                  buttonAlignSelf="stretch"
                  buttonLabel="Lotion"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className={styles.products2}>
        <h2 className={styles.bestSellers}>Featured products</h2>
        <section className={styles.productsWrapper}>
          <div className={styles.product}>
            <div className={styles.image}>
              <Badge
                color="Red"
                badgePosition="absolute"
                badgeTop="16px"
                badgeRight="16px"
                badgeText="-20%"
              />
            </div>
            <div className={styles.productInfo}>
              <div className={styles.faceToner}>Face Toner</div>
              <div className={styles.price}>
                <div className={styles.div}>$59.99</div>
                <div className={styles.div2}>$47.99</div>
              </div>
            </div>
          </div>
          <Product image="/Image6@2x.png" bodyWash="Body Wash" />
          <div className={styles.product}>
            <div className={styles.image2}>
              <Badge
                color="Dark"
                badgePosition="absolute"
                badgeTop="16px"
                badgeRight="16px"
                badgeText="New"
              />
            </div>
            <div className={styles.productInfo}>
              <div className={styles.faceToner}>Body Serum</div>
              <div className={styles.div3}>$49.99</div>
            </div>
          </div>
          <Product image="/Image10@2x.png" bodyWash="Face Mask" />
        </section>
      </section>
      <ImageLeftSection />
      <Products />
      <section className={styles.itemsGrid}>
        <div className={styles.categoryWrapper}>
          <section className={styles.image8}>
            <h3 className={styles.giftTheGlow}>
              Glow with nature’s best essence
            </h3>
            <Button1
              color="Bright"
              buttonAlignSelf="unset"
              buttonLabel="Shop the essence"
            />
          </section>
          <section className={styles.image9}>
            <h3 className={styles.giftTheGlow}>Gift the glow</h3>
            <Button1
              color="Dark"
              buttonAlignSelf="unset"
              buttonLabel="Get a gift card"
            />
          </section>
          <div className={styles.image10}>
            <div className={styles.giftTheGlow2}>Gift the glow</div>
            <Button1
              color="Dark"
              buttonAlignSelf="unset"
              buttonLabel="Get a gift card"
            />
          </div>
        </div>
      </section>
      <FullImageSection />
      <TestimonialsSection />
      <InstagramSection />
      <ImageWrapper />
      <Footer1 mobile={false} color="Dark" />
      <div className={styles.globalNavigationMobile}>
        <div className={styles.leftContent}>
          <Image
            className={styles.menuIcon}
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/menu.svg"
          />
          <SkinClinicLogo1 color="Dark" />
        </div>
        <button className={styles.links}>
          <Image
            className={styles.searchIcon}
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/search.svg"
          />
          <a
            className={styles.bag0}
            href="https://www.figma.com/design/XfNVMn9MjuEwh4RiYjLxM6?node-id=69-11395"
            target="_blank"
          >
            Bag (0)
          </a>
        </button>
      </div>
      <GlobalNavigationDesktop1 type="Default" color="Dark" />
    </div>
  );
};

export default Desktop2;
