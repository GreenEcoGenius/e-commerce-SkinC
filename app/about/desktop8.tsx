import type { NextPage } from "next";
import Link from "next/link";
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
          <Link href="/cart" className={styles.bag0}>
            Bag (0)
          </Link>
        </div>
      </div>
      <GlobalNavigationDesktop2 type="Default" color="Dark" />
    </div>
  );
};

export default Desktop8;
