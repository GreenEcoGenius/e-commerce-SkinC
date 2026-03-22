import type { NextPage } from "next";
import Filter from "./filter";
import Input2 from "./input2";
import Product1 from "./product1";
import Badge1 from "./badge1";
import Product2 from "./product2";
import styles from "./products1.module.css";

export type Products1Type = {
  className?: string;
};

const Products1: NextPage<Products1Type> = ({ className = "" }) => {
  return (
    <main className={[styles.products, className].join(" ")}>
      <h1 className={styles.allProducts}>All products</h1>
      <div className={styles.filterProducts}>
        <Filter
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
          checkboxIconBackgroundColor11="unset"
          checkboxIconBackgroundColor12="unset"
          checkboxIconBackgroundColor13="unset"
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
          checkboxIconMargin11="0"
          checkboxIconMargin12="0"
          checkboxIconMargin13="0"
          checkboxIconPadding1="unset"
          checkboxIconPadding2="unset"
          checkboxIconPadding3="unset"
          checkboxIconPadding4="unset"
          checkboxIconPadding5="unset"
          checkboxIconPadding6="unset"
          checkboxIconPadding7="unset"
          checkboxIconPadding8="unset"
          checkboxIconPadding9="unset"
          checkboxIconPadding10="unset"
          checkboxIconPadding11="unset"
          checkboxIconPadding12="unset"
          checkboxIconPadding13="unset"
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
        <div className={styles.filterMobile}>
          <Input2
            onDark={false}
            placeholder="Filter (0)"
            keyboardArrowDown="/keyboard-arrow-down.svg"
          />
        </div>
        <div className={styles.products2}>
          <section className={styles.row}>
            <Product1 image="/Image6@2x.png" bodyWash="Body Wash" />
            <div className={styles.product}>
              <div className={styles.image}>
                <Badge1
                  color="Dark"
                  showBadge
                  badgeRight="16px"
                  badgeText="New"
                />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.bodySerum}>Body Serum</div>
                <div className={styles.div}>$49.99</div>
              </div>
            </div>
            <Product1 image="/Image10@2x.png" bodyWash="Face Mask" />
          </section>
          <section className={styles.row}>
            <div className={styles.product2}>
              <div className={styles.image2}>
                <Badge1 color="Red" showBadge badgeText="-20%" />
              </div>
              <div className={styles.productInfo2}>
                <div className={styles.bodySerum2}>Body Serum</div>
                <div className={styles.bodyWash}>Body Wash</div>
                <div className={styles.div2}>$49.99</div>
                <div className={styles.faceToner}>Face Toner</div>
                <div className={styles.price}>
                  <div className={styles.priceSpacer}>$59.99</div>
                  <div className={styles.div3}>$47.99</div>
                </div>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.image3}>
                <Badge1
                  color="Dark"
                  showBadge={false}
                  badgeRight="-39px"
                  badgeText="New"
                />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.faceToner2}>Face Toner</div>
                <div className={styles.price2}>
                  <div className={styles.div4}>$59.99</div>
                  <div className={styles.div3}>$47.99</div>
                </div>
                <div className={styles.bodySerum3}>Body Serum</div>
                <div className={styles.bodySerum}>Body Wash</div>
                <div className={styles.div}>$49.99</div>
              </div>
            </div>
            <div className={styles.product4}>
              <div className={styles.image4}>
                <Badge1
                  color="Dark"
                  showBadge
                  badgeRight="16px"
                  badgeText="New"
                />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.bodySerum2}>Body Wash</div>
                <div className={styles.faceToner3}>Face Toner</div>
                <div className={styles.price3}>
                  <div className={styles.div}>$59.99</div>
                  <div className={styles.div3}>$47.99</div>
                </div>
                <div className={styles.faceToner}>Body Serum</div>
                <div className={styles.div9}>$49.99</div>
              </div>
            </div>
          </section>
          <section className={styles.row}>
            <Product1 image="/Image6@2x.png" bodyWash="Body Wash" />
            <div className={styles.product}>
              <div className={styles.image}>
                <Badge1
                  color="Dark"
                  showBadge
                  badgeRight="16px"
                  badgeText="New"
                />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.bodySerum}>Body Serum</div>
                <div className={styles.div}>$49.99</div>
              </div>
            </div>
            <div className={styles.product4}>
              <div className={styles.image6}>
                <Badge1
                  color="Red"
                  showBadge
                  badgeRight="16px"
                  badgeText="-20%"
                />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.bodySerum}>Face Toner</div>
                <div className={styles.price4}>
                  <div className={styles.div4}>$59.99</div>
                  <div className={styles.div3}>$47.99</div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.row}>
            <div className={styles.product4}>
              <div className={styles.image7}>
                <Badge1
                  color="Red"
                  showBadge={false}
                  badgeRight="76px"
                  badgeText="-20%"
                />
              </div>
              <div className={styles.image8}>
                <Badge1
                  color="Red"
                  showBadge
                  badgeRight="16px"
                  badgeText="-20%"
                />
              </div>
              <div className={styles.productInfo7}>
                <div className={styles.faceMask}>Body Wash</div>
                <div className={styles.faceMask}>Face Mask</div>
                <div className={styles.div13}>$49.99</div>
                <div className={styles.faceToner5}>Face Toner</div>
                <div className={styles.price5}>
                  <div className={styles.div4}>$59.99</div>
                  <div className={styles.div3}>$47.99</div>
                </div>
              </div>
            </div>
            <Product2
              image="/Image10@2x.png"
              image1="/Image6@2x.png"
              faceMask="Face Mask"
              bodyWash="Body Wash"
            />
            <Product2
              image="/Image6@2x.png"
              image1="/Image10@2x.png"
              faceMask="Body Wash"
              bodyWash="Face Mask"
            />
          </section>
          <div className={styles.row5}>
            <div className={styles.product}>
              <div className={styles.image2}>
                <Badge1
                  color="Red"
                  showBadge
                  badgeRight="16px"
                  badgeText="-20%"
                />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.bodySerum2}>Body Serum</div>
                <div className={styles.bodyWash}>Body Wash</div>
                <div className={styles.div2}>$49.99</div>
                <div className={styles.faceToner}>Face Toner</div>
                <div className={styles.price}>
                  <div className={styles.div4}>$59.99</div>
                  <div className={styles.div3}>$47.99</div>
                </div>
              </div>
            </div>
            <div className={styles.product4}>
              <div className={styles.image10}>
                <Badge1
                  color="Dark"
                  showBadge={false}
                  badgeRight="-39px"
                  badgeText="New"
                />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.faceToner2}>Face Toner</div>
                <div className={styles.price2}>
                  <div className={styles.div4}>$59.99</div>
                  <div className={styles.div3}>$47.99</div>
                </div>
                <div className={styles.bodySerum3}>Body Serum</div>
                <div className={styles.bodySerum}>Body Wash</div>
                <div className={styles.div}>$49.99</div>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.image}>
                <Badge1
                  color="Dark"
                  showBadge
                  badgeRight="16px"
                  badgeText="New"
                />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.bodySerum2}>Body Wash</div>
                <div className={styles.faceToner3}>Face Toner</div>
                <div className={styles.price3}>
                  <div className={styles.div22}>$59.99</div>
                  <div className={styles.div23}>$47.99</div>
                </div>
                <div className={styles.faceToner}>Body Serum</div>
                <div className={styles.div9}>$49.99</div>
              </div>
            </div>
            <div className={styles.product11}>
              <div className={styles.image12}>
                <Badge1
                  color="Dark"
                  showBadge
                  badgeRight="16px"
                  badgeText="New"
                />
              </div>
              <div className={styles.productInfo11}>
                <div className={styles.faceToner9}>Face Toner</div>
                <div className={styles.price9}>
                  <div className={styles.div22}>$59.99</div>
                  <div className={styles.div23}>$47.99</div>
                </div>
                <div className={styles.bodyWash8}>Body Wash</div>
                <div className={styles.bodySerum9}>Body Serum</div>
                <div className={styles.div27}>$49.99</div>
              </div>
              <div className={styles.productInfo12}>
                <div className={styles.bodySerum10}>Body Serum</div>
                <div className={styles.div22}>$49.99</div>
              </div>
            </div>
          </div>
          <div className={styles.row5}>
            <div className={styles.product}>
              <div className={styles.image13}>
                <Badge1
                  color="Dark"
                  showBadge
                  badgeRight="16px"
                  badgeText="New"
                />
              </div>
              <div className={styles.image14}>
                <Badge1
                  color="Dark"
                  showBadge={false}
                  badgeRight="144px"
                  badgeText="New"
                />
              </div>
              <div className={styles.productInfo7}>
                <div className={styles.bodySerum11}>Body Serum</div>
                <div className={styles.bodyWash9}>Body Wash</div>
                <div className={styles.div}>$49.99</div>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.image15}>
                <Badge1
                  color="Dark"
                  showBadge={false}
                  badgeRight="-102px"
                  badgeText="New"
                />
              </div>
              <div className={styles.image16}>
                <Badge1
                  color="Dark"
                  showBadge
                  badgeRight="16px"
                  badgeText="New"
                />
              </div>
              <div className={styles.productInfo7}>
                <div className={styles.bodySerum11}>Body Wash</div>
                <div className={styles.bodyWash9}>Body Serum</div>
                <div className={styles.div}>$49.99</div>
              </div>
            </div>
            <Product1 image="/Image10@2x.png" bodyWash="Face Mask" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products1;