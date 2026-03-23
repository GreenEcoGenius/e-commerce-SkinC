import type { NextPage } from "next";
import Image from "next/image";
import ImageLeftSection3 from "../../components/image-left-section2";
import ImageLeftSection4 from "../../components/image-left-section3";
import InstagramSection5 from "../../components/instagram-section3";
import ImageWrapper5 from "../../components/image-wrapper3";
import Footer6 from "../../components/footer311";
import SkinClinicLogo6 from "../../components/skin-clinic-logo311";
import GlobalNavigationDesktop6 from "../../components/global-navigation-desktop311";
import styles from "./desktop13.module.css";

const Desktop13: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <main className={styles.fullImageSection}>
        <div className={styles.imageWrapper}>
          <div className={styles.heroOffer}>
            <div className={styles.text}>
              <div className={styles.ourStory}>Our story</div>
              <h1 className={styles.naturesFinestFor}>
                Nature’s finest for your skin
              </h1>
              <div className={styles.skinClinicWasBorn}>
                Skin-Clinic was born from a passion for natural skincare that
                truly works. We believe in harnessing the power of nature to
                create products that nurture and restore your skin’s natural
                beauty.
              </div>
            </div>
          </div>
        </div>
      </main>
      <ImageLeftSection3 />
      <ImageLeftSection4 />
      <section className={styles.itemsGrid}>
        <div className={styles.itemsWrapper}>
          <section className={styles.image}>
            <div className={styles.text2}>
              <h2 className={styles.ourFormulationProcess}>
                Our formulation process
              </h2>
              <div className={styles.atSkinClinicEvery}>
                At Skin-Clinic, every product is developed with precision by our
                team of skincare experts. We blend science and nature,
                rigorously testing each formula to ensure it’s gentle,
                effective, and safe. Our process guarantees that only the best
                reaches your skin, delivering real results you can trust.
              </div>
            </div>
          </section>
          <section className={styles.image2}>
            <div className={styles.text2}>
              <h2 className={styles.ourFormulationProcess}>
                Building a community of glow
              </h2>
              <div className={styles.atSkinClinicEvery}>
                Skin-Clinic is more than a brand—it’s a community. We listen to
                your needs, creating products that address real skin concerns
                with natural solutions. Join us on this journey to celebrate
                healthy skin, share tips, and inspire each other to glow
                confidently every day.
              </div>
            </div>
          </section>
          <div className={styles.image3}>
            <div className={styles.skinClinicWasBorn}>Gift the glow</div>
            <div className={styles.button}>
              <div className={styles.buttonLabel}>Get a gift card</div>
            </div>
          </div>
        </div>
      </section>
      <InstagramSection5 />
      <ImageWrapper5 />
      <Footer6 mobile={false} color="Dark" />
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
          <SkinClinicLogo6 color="Dark" />
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
      <GlobalNavigationDesktop6 type="Default" color="Dark" />
    </div>
  );
};

export default Desktop13;
