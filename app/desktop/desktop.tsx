import type { NextPage } from "next";
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
          <a
            className={styles.bag0}
            href="https://www.figma.com/design/XfNVMn9MjuEwh4RiYjLxM6?node-id=69-11395"
            target="_blank"
          >
            Bag (0)
          </a>
        </div>
      </div>
      <GlobalNavigationDesktop type="Default" color="Dark" />
    </div>
  );
};

export default Desktop;
