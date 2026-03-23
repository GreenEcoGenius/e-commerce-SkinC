import type { NextPage } from "next";
import Image from "next/image";
import ImageLeftSection1 from "../../components/image-left-section1";
import InstagramSection1 from "../../components/instagram-section1";
import ImageWrapper1 from "../../components/image-wrapper1";
import Footer2 from "../../components/footer2";
import SkinClinicLogo2 from "../../components/skin-clinic-logo2";
import GlobalNavigationDesktop2 from "../../components/global-navigation-desktop2";
import styles from "./desktop8.module.css";

const Desktop8: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <ImageLeftSection1 />
      <InstagramSection1 />
      <ImageWrapper1 />
      <Footer2 mobile={false} color="Dark" />
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
          <SkinClinicLogo2 color="Dark" />
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
      <GlobalNavigationDesktop2 type="Default" color="Dark" />
    </div>
  );
};

export default Desktop8;
