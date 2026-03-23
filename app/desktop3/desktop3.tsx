import type { NextPage } from "next";
import Image from "next/image";
import Products1 from "../../components/products1";
import InstagramSection1 from "../../components/instagram-section1";
import ImageWrapper1 from "../../components/image-wrapper1";
import Filter from "../../components/filter";
import Footer2 from "../../components/footer1";
import SkinClinicLogo2 from "../../components/skin-clinic-logo1";
import GlobalNavigationDesktop2 from "../../components/global-navigation-desktop1";
import styles from "./desktop3.module.css";

const Desktop3: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <Products1 />
      <InstagramSection1 />
      <ImageWrapper1 />
      <div className={styles.filterMobile}>
        <Filter
          headerMargin="unset"
          accordionOpen1={false}
          accordionOpen11={false}
          accordionOpen12={false}
          accordionOpen13={false}
          accordionHeader="Ingredients"
          accordionHeader1="Type"
          accordionHeader2="Price"
          accordionHeader3="Size"
          checkboxChecked={false}
          checkboxChecked1={false}
          checkboxChecked2={false}
          checkboxChecked3={false}
          checkboxChecked4={false}
          checkboxChecked5={false}
          checkboxChecked6={false}
          checkboxChecked7={false}
          checkboxChecked8={false}
          checkboxChecked9={false}
          checkboxChecked10={false}
          checkboxChecked11={false}
          checkboxChecked12={false}
          checkboxChecked13={false}
          checkboxLabel="Hyaluronic acid"
          checkboxLabel1="Botanical extracts"
          checkboxLabel2="Glycerin"
          checkboxLabel3="Caffeine"
          checkboxLabel4="Peptides"
          checkboxLabel5="Vitamin E"
          checkboxLabel6="Cream"
          checkboxLabel7="Lotion"
          checkboxLabel8="Serum"
          checkboxLabel9="Oil"
          checkboxLabel10="Cleanser"
          checkboxLabel11="Under $50"
          checkboxLabel12="$100-$150"
          checkboxLabel13="Above $200"
          checkboxLabel15
          checkboxLabel16
          checkboxLabel17
          checkboxLabel18
          checkboxLabel19
          checkboxLabel20
          checkboxLabel21
          checkboxLabel22
          checkboxLabel23
          checkboxLabel24
          checkboxLabel25
          checkboxLabel26
          checkboxLabel27
          checkboxIconBackgroundColor="#fff"
          checkboxIconBackgroundColor1="#fff"
          checkboxIconBackgroundColor2="#fff"
          checkboxIconBackgroundColor3="#fff"
          checkboxIconBackgroundColor4="#fff"
          checkboxIconBackgroundColor5="#fff"
          checkboxIconBackgroundColor6="#fff"
          checkboxIconBackgroundColor7="#fff"
          checkboxIconBackgroundColor8="#fff"
          checkboxIconBackgroundColor9="#fff"
          checkboxIconBackgroundColor10="#fff"
          checkboxIconBackgroundColor11="#fff"
          checkboxIconBackgroundColor12="#fff"
          checkboxIconBackgroundColor13="#fff"
          checkboxIconMargin="unset"
          checkboxIconMargin1="unset"
          checkboxIconMargin2="unset"
          checkboxIconMargin3="unset"
          checkboxIconMargin4="unset"
          checkboxIconMargin5="unset"
          checkboxIconMargin6="unset"
          checkboxIconMargin7="unset"
          checkboxIconMargin8="unset"
          checkboxIconMargin9="unset"
          checkboxIconMargin10="unset"
          checkboxIconMargin11="unset"
          checkboxIconMargin12="unset"
          checkboxIconMargin13="unset"
          checkboxIconPadding="0"
          checkboxIconPadding1="0"
          checkboxIconPadding2="0"
          checkboxIconPadding3="0"
          checkboxIconPadding4="0"
          checkboxIconPadding5="0"
          checkboxIconPadding6="0"
          checkboxIconPadding7="0"
          checkboxIconPadding8="0"
          checkboxIconPadding9="0"
          checkboxIconPadding10="0"
          checkboxIconPadding11="0"
          checkboxIconPadding12="0"
          checkboxIconPadding13="0"
          variantChecked={false}
          variantChecked1={false}
          variantChecked2={false}
          variantChecked3={false}
          variantChecked4={false}
          variantOption="50 ml"
          variantOption1="100 ml"
          variantOption2="150 ml"
          variantOption3="200 ml"
          variantOption4="250 ml"
        />
      </div>
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

export default Desktop3;