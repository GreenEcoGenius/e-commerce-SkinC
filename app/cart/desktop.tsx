import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/container";
import Footer from "../../components/footer";
import SkinClinicLogo from "../../components/skin-clinic-logo";
import GlobalNavigationDesktop from "../../components/global-navigation-desktop";
import styles from "./desktop.module.css";

const Desktop: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <main className={styles.imageLeftSection}>
        <Container />
      </main>
      <Footer mobile={false} color="Dark" />
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
          <SkinClinicLogo color="Dark" />
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
      <GlobalNavigationDesktop type="Default" color="Dark" />
    </div>
  );
};

export default Desktop;
