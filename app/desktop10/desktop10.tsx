import type { NextPage } from "next";
import Image from "next/image";
import ImageLeftSection2 from "../../components/image-left-section11";
import Products2 from "../../components/products2";
import InstagramSection3 from "../../components/instagram-section2";
import ImageWrapper3 from "../../components/image-wrapper2";
import Footer4 from "../../components/footer21";
import SkinClinicLogo4 from "../../components/skin-clinic-logo21";
import GlobalNavigationDesktop4 from "../../components/global-navigation-desktop21";
import styles from "./desktop10.module.css";

const Desktop10: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <ImageLeftSection2 />
      <section className={styles.imageLeftSection}>
        <div className={styles.container}>
          <div className={styles.textWrapper}>
            <div className={styles.text}>
              <h2 className={styles.yourDailyGlow}>Your daily glow ritual</h2>
              <div className={styles.apply23Drops}>
                Apply 2-3 drops of Pure Solution Essence to freshly cleansed
                skin, then gently pat with your fingertips until fully absorbed.
                Use this step to kickstart your morning or night routine for a
                noticeable glow.
              </div>
            </div>
          </div>
          <Image
            className={styles.imageIcon}
            loading="lazy"
            width={588}
            height={588}
            sizes="100vw"
            alt=""
            src="/Image34@2x.png"
          />
        </div>
      </section>
      <section className={styles.categorySection}>
        <h2 className={styles.yourDailyGlow}>Key ingredients</h2>
        <div className={styles.categoryWrapper}>
          <section className={styles.imageWrapper}>
            <div className={styles.category}>
              <div className={styles.image}>
                <h3 className={styles.hyaluronicAcid}>Hyaluronic acid</h3>
                <div className={styles.apply23Drops}>
                  A powerful humectant that deeply hydrates and plumps the skin,
                  helping to retain moisture and improve elasticity for a
                  smoother complexion.
                </div>
              </div>
            </div>
          </section>
          <section className={styles.imageWrapper}>
            <div className={styles.category}>
              <div className={styles.image2}>
                <h3 className={styles.hyaluronicAcid}>Botanical extracts</h3>
                <div className={styles.apply23Drops}>
                  Natural plant-based ingredients that soothe and nourish,
                  offering antioxidant benefits to protect skin and enhance its
                  natural radiance.
                </div>
              </div>
            </div>
          </section>
          <section className={styles.imageWrapper}>
            <div className={styles.category}>
              <div className={styles.image3}>
                <h3 className={styles.hyaluronicAcid}>Glycerin</h3>
                <div className={styles.apply23Drops}>
                  A gentle moisturizing agent that draws water into the skin,
                  supporting hydration and leaving it soft and supple with
                  regular use.
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Products2 />
      <InstagramSection3 />
      <ImageWrapper3 />
      <Footer4 mobile={false} color="Dark" />
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
          <SkinClinicLogo4 color="Dark" />
        </div>
        <div className={styles.links}>
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
        </div>
      </div>
      <GlobalNavigationDesktop4 type="Default" color="Dark" />
    </div>
  );
};

export default Desktop10;
