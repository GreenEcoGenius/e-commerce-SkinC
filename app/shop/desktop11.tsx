import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Products1 from "../../components/products1";
import InstagramSection3 from "../../components/instagram-section11";
import ImageWrapper3 from "../../components/image-wrapper11";
import Filter from "../../components/filter";
import Footer4 from "../../components/footer1";
import SkinClinicLogo4 from "../../components/skin-clinic-logo1";
import GlobalNavigationDesktop4 from "../../components/global-navigation-desktop1";
import styles from "./desktop11.module.css";

const Desktop11: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <Products1 />
      <InstagramSection3 />
      <ImageWrapper3 />
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
          <Link href="/cart" className={styles.bag0}>
            Bag (0)
          </Link>
        </div>
      </div>
      <GlobalNavigationDesktop4 type="Default" color="Dark" />
    </div>
  );
};

export default Desktop11;
