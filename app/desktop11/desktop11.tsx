import type { NextPage } from "next";
import Image from "next/image";
import CategoryWrapper from "../../components/category-wrapper";
import InstagramSection4 from "../../components/instagram-section4";
import ImageWrapper4 from "../../components/image-wrapper4";
import Footer5 from "../../components/footer4";
import SkinClinicLogo5 from "../../components/skin-clinic-logo4";
import GlobalNavigationDesktop5 from "../../components/global-navigation-desktop4";
import styles from "./desktop11.module.css";

const Desktop11: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <main className={styles.products}>
        <h1 className={styles.yourGuideTo}>
          Your guide to natural skincare wisdom
        </h1>
        <CategoryWrapper />
      </main>
      <InstagramSection4 />
      <ImageWrapper4 />
      <Footer5 mobile={false} color="Dark" />
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
          <SkinClinicLogo5 color="Dark" />
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
      <GlobalNavigationDesktop5 type="Default" color="Dark" />
    </div>
  );
};

export default Desktop11;
