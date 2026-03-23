import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactInfo from "../../components/contact-info";
import InstagramSection2 from "../../components/instagram-section2";
import ImageWrapper2 from "../../components/image-wrapper2";
import Footer3 from "../../components/footer31";
import SkinClinicLogo3 from "../../components/skin-clinic-logo31";
import GlobalNavigationDesktop3 from "../../components/global-navigation-desktop31";
import styles from "./desktop9.module.css";

const Desktop9: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <section className={styles.hero}>
        <div className={styles.heroOffer}>
          <div className={styles.text}>
            <div className={styles.ecoFriendlySkincareHabits}>
              Eco-friendly skincare habits
            </div>
            <div className={styles.glowWithNatures}>
              Glow with nature’s finest, every single day
            </div>
            <h1 className={styles.contactUs}>Contact us</h1>
          </div>
        </div>
      </section>
      <ContactInfo />
      <InstagramSection2 />
      <ImageWrapper2 />
      <Footer3 mobile={false} color="Dark" />
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
          <SkinClinicLogo3 color="Dark" />
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
      <GlobalNavigationDesktop3 type="Default" color="Dark" />
    </div>
  );
};

export default Desktop9;
