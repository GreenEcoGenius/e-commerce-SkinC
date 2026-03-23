import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./desktop4.module.css";

const Desktop4: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <main className={styles.imageLeftSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.myAccount}>My account</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.leftTabLinks}>
              <div className={styles.orderHistory}>Order history</div>
              <div className={styles.profileSettings}>Profile settings</div>
              <div className={styles.orderHistory}>Log out</div>
            </div>
            <section className={styles.rightContent}>
              <div className={styles.orderDetails}>
                <div className={styles.header2}>
                  <div className={styles.orderStatus}>
                    <div className={styles.orderSummary}>Order #234325542</div>
                    <div className={styles.delivered}>Delivered</div>
                    <div className={styles.delivered}>
                      Thursday 23, February
                    </div>
                    <div className={styles.delivered}>$310.94</div>
                  </div>
                  <button className={styles.button}>
                    <div className={styles.buttonLabel}>Download invoice</div>
                  </button>
                </div>
                <div className={styles.divider} />
                <div className={styles.productsWrapper}>
                  <div className={styles.product}>
                    <Image
                      className={styles.imageIcon}
                      width={163}
                      height={187.3}
                      sizes="100vw"
                      alt=""
                      src="/Image21@2x.png"
                    />
                    <div className={styles.productInfo}>
                      <div className={styles.faceToner}>Face Toner</div>
                      <div className={styles.price}>
                        <div className={styles.subtotal0Items}>$47.99</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.product}>
                    <Image
                      className={styles.imageIcon2}
                      width={163}
                      height={187.3}
                      sizes="100vw"
                      alt=""
                      src="/Image23@2x.png"
                    />
                    <div className={styles.productInfo}>
                      <div className={styles.faceToner}>Body Serum</div>
                      <div className={styles.subtotal0Items}>$49.99</div>
                    </div>
                  </div>
                  <div className={styles.product}>
                    <Image
                      className={styles.imageIcon2}
                      width={163}
                      height={187.3}
                      sizes="100vw"
                      alt=""
                      src="/Image22@2x.png"
                    />
                    <div className={styles.productInfo}>
                      <div className={styles.faceToner}>Body Wash</div>
                      <div className={styles.subtotal0Items}>$49.99</div>
                    </div>
                  </div>
                  <div className={styles.product}>
                    <Image
                      className={styles.imageIcon2}
                      width={163}
                      height={187.3}
                      sizes="100vw"
                      alt=""
                      src="/Image23@2x.png"
                    />
                    <div className={styles.productInfo}>
                      <div className={styles.faceToner}>Body Serum</div>
                      <div className={styles.subtotal0Items}>$49.99</div>
                    </div>
                  </div>
                  <div className={styles.product}>
                    <Image
                      className={styles.imageIcon2}
                      width={163}
                      height={187.3}
                      sizes="100vw"
                      alt=""
                      src="/Image22@2x.png"
                    />
                    <div className={styles.productInfo}>
                      <div className={styles.faceToner}>Body Wash</div>
                      <div className={styles.subtotal0Items}>$49.99</div>
                    </div>
                  </div>
                  <div className={styles.product}>
                    <Image
                      className={styles.imageIcon2}
                      width={163}
                      height={187.3}
                      sizes="100vw"
                      alt=""
                      src="/Image21@2x.png"
                    />
                    <div className={styles.productInfo}>
                      <div className={styles.faceToner}>Face Toner</div>
                      <div className={styles.price}>
                        <div className={styles.subtotal0Items}>$47.99</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.textInformation}>
                  <div className={styles.leftContent}>
                    <div className={styles.orderSummary}>Order summary</div>
                    <div className={styles.textWrapper}>
                      <div className={styles.row}>
                        <div className={styles.subtotal0Items}>
                          Subtotal (0 items)
                        </div>
                        <div className={styles.div8}>$295.94</div>
                      </div>
                      <div className={styles.row}>
                        <div className={styles.subtotal0Items}>Shipping</div>
                        <div className={styles.div8}>$10.00</div>
                      </div>
                      <div className={styles.row}>
                        <div className={styles.subtotal0Items}>Tax</div>
                        <div className={styles.div8}>$5.00</div>
                      </div>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.row4}>
                      <div className={styles.subtotal0Items}>Total</div>
                      <div className={styles.div11}>$310.94</div>
                    </div>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.leftContent}>
                    <div className={styles.orderSummary}>
                      Shipping information
                    </div>
                    <div className={styles.leftContent}>
                      <div className={styles.press}>Shipping information</div>
                      <div className={styles.saraChen}>Sara Chen</div>
                      <div className={styles.aboutUs}>Sara Chen</div>
                      <div className={styles.oconnorStOttawa}>
                        151 O’Connor St, Ottawa, ON, K2P 2JS, Canada
                      </div>
                    </div>
                    <div className={styles.leftContent}>
                      <div className={styles.saraChen}>Shipping method</div>
                      <div className={styles.aboutUs}>Shipping information</div>
                      <div className={styles.oconnorStOttawa}>
                        Post Expedited Parcel
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.productsWrapper}>
                  <div className={styles.subtotal0Items}>Shipping policy</div>
                  <div className={styles.subtotal0Items}>Start a return</div>
                  <div className={styles.subtotal0Items}>Contact us</div>
                </div>
              </div>
              <div className={styles.row5}>
                <div className={styles.settingTile}>
                  <div className={styles.delivered}>Full name</div>
                  <div className={styles.value}>Sara Chen</div>
                </div>
                <div className={styles.settingTile}>
                  <div className={styles.delivered}>Email address</div>
                  <div className={styles.value}>sarachen@example.com</div>
                </div>
              </div>
              <div className={styles.row5}>
                <div className={styles.settingTile}>
                  <div className={styles.delivered}>Shipping address</div>
                  <div className={styles.value}>
                    151 O’Connor St, Ottawa, ON, K2P 2JS, Canada
                  </div>
                </div>
                <div className={styles.settingTile}>
                  <div className={styles.delivered}>Phone number</div>
                  <div className={styles.value}>+1 222 333 4444</div>
                </div>
              </div>
              <div className={styles.row7}>
                <div className={styles.settingTile5}>
                  <div className={styles.delivered}>Password</div>
                  <div className={styles.value}>*****************</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.topContent}>
          <div className={styles.column}>
            <div className={styles.skinclinicLogo}>
              <Image
                className={styles.vectorIcon}
                loading="lazy"
                width={120}
                height={18.4}
                sizes="100vw"
                alt=""
                src="/Vector.svg"
              />
            </div>
            <div className={styles.socialLinks}>
              <Image
                className={styles.instagramIcon}
                loading="lazy"
                width={16}
                height={16}
                sizes="100vw"
                alt=""
                src="/Instagram.svg"
              />
              <Image
                className={styles.facebookIcon}
                loading="lazy"
                width={16}
                height={16}
                sizes="100vw"
                alt=""
                src="/Facebook.svg"
              />
              <Image
                className={styles.facebookIcon}
                loading="lazy"
                width={16}
                height={16}
                sizes="100vw"
                alt=""
                src="/Youtube.svg"
              />
            </div>
          </div>
          <div className={styles.column2}>
            <div className={styles.products}>Products</div>
            <div className={styles.links2}>
              <div className={styles.creams}>Creams</div>
              <div className={styles.creams}>Serums</div>
              <div className={styles.creams}>Lotions</div>
              <div className={styles.creams}>Shop all</div>
            </div>
          </div>
          <div className={styles.column2}>
            <div className={styles.company}>Company</div>
            <div className={styles.links3}>
              <div className={styles.faqs}>FAQs</div>
              <div className={styles.faqs}>Contact us</div>
              <div className={styles.faqs}>Return policy</div>
              <div className={styles.faqs}>Shipping policy</div>
              <div className={styles.faqs}>Start a return</div>
              <Link href="/our-story" className={styles.aboutUs}>About us</Link>
              <div className={styles.aboutUs}>Journal</div>
              <div className={styles.aboutUs}>Contact us</div>
            </div>
            <div className={styles.support}>Support</div>
            <div className={styles.links4}>
              <div className={styles.press}>About us</div>
              <div className={styles.press}>Journal</div>
              <div className={styles.press}>Press</div>
              <div className={styles.aboutUs}>FAQs</div>
              <div className={styles.aboutUs}>Return policy</div>
              <div className={styles.aboutUs}>Shipping policy</div>
              <div className={styles.aboutUs}>Start a return</div>
            </div>
          </div>
          <div className={styles.column2}>
            <div className={styles.company}>Support</div>
            <div className={styles.support}>Company</div>
            <div className={styles.links5}>
              <div className={styles.faqs3}>FAQs</div>
              <div className={styles.contactUs4}>Contact us</div>
              <div className={styles.faqs3}>Return policy</div>
              <div className={styles.press2}>Press</div>
              <div className={styles.faqs3}>Shipping policy</div>
              <div className={styles.faqs3}>Start a return</div>
              <Link href="/our-story" className={styles.aboutUs}>About us</Link>
              <div className={styles.aboutUs3}>Journal</div>
              <div className={styles.aboutUs3}>Contact us</div>
            </div>
          </div>
        </div>
        <div className={styles.divider6} />
        <div className={styles.bottomContent}>
          <div className={styles.orderHistory}>© 2025 Skin—Clinic</div>
          <div className={styles.legalLinks}>
            <div className={styles.orderHistory}>Terms of service</div>
            <div className={styles.orderHistory}>Privacy policy</div>
            <div className={styles.orderHistory}>Cookies settings</div>
          </div>
        </div>
      </footer>
      <div className={styles.globalNavigationMobile}>
        <div className={styles.leftContent2}>
          <Image
            className={styles.menuIcon}
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/menu.svg"
          />
          <div className={styles.skinclinicLogo}>
            <Image
              className={styles.vectorIcon}
              width={120}
              height={18.4}
              sizes="100vw"
              alt=""
              src="/Vector.svg"
            />
          </div>
        </div>
        <div className={styles.links6}>
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
      <header className={styles.globalNavigationDesktop}>
        <nav className={styles.leftLinks}>
          <div className={styles.orderHistory}>Shop</div>
          <div className={styles.orderHistory}>About us</div>
          <div className={styles.orderHistory}>Journal</div>
        </nav>
        <div className={styles.skinclinicLogo}>
          <Image
            className={styles.vectorIcon}
            loading="lazy"
            width={120}
            height={18.4}
            sizes="100vw"
            alt=""
            src="/Vector.svg"
          />
        </div>
        <nav className={styles.leftLinks2}>
          <div className={styles.orderHistory}>Account</div>
          <div className={styles.orderHistory}>Search</div>
          <Link href="/cart" className={styles.bag0}>
            Bag (0)
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Desktop4;
