import type { NextPage } from "next";
import Image from "next/image";
import CategoryWrapper from "../../components/category-wrapper";
import InstagramSection5 from "../../components/instagram-section4";
import ImageWrapper5 from "../../components/image-wrapper4";
import Footer6 from "../../components/footer4";
import SkinClinicLogo6 from "../../components/skin-clinic-logo4";
import GlobalNavigationDesktop6 from "../../components/global-navigation-desktop4";
import styles from "./desktop13.module.css";

const Desktop13: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <main className={styles.products}>
        <h1 className={styles.yourGuideTo}>
          Your guide to natural skincare wisdom
        </h1>
        <CategoryWrapper />
      </main>
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
      <GlobalNavigationDesktop6 type="Default" color="Dark" />
    </div>
  );
};

export default Desktop13;
