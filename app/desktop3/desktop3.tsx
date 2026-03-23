import type { NextPage } from "next";
import Image from "next/image";
import styles from "./desktop3.module.css";

const Desktop3: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <main className={styles.imageLeftSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.myAccount}>My account</h1>
          </div>
          <section className={styles.content}>
            <div className={styles.leftTabLinks}>
              <div className={styles.orderHistory}>Order history</div>
              <div className={styles.profileSettings}>Profile settings</div>
              <div className={styles.profileSettings}>Log out</div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.header2}>
                <h2 className={styles.youHaveNo}>You have no orders yet</h2>
                <div className={styles.orderHistoryIs}>
                  Order history is empty. Once orders are placed, all order
                  details will be displayed here.
                </div>
              </div>
              <button className={styles.button}>
                <div className={styles.buttonLabel}>Back to shopping</div>
              </button>
            </div>
          </section>
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
            <div className={styles.links}>
              <div className={styles.creams}>Creams</div>
              <div className={styles.creams}>Serums</div>
              <div className={styles.creams}>Lotions</div>
              <div className={styles.creams}>Shop all</div>
            </div>
          </div>
          <div className={styles.column2}>
            <div className={styles.company}>Company</div>
            <div className={styles.links2}>
              <div className={styles.faqs}>FAQs</div>
              <div className={styles.faqs}>Contact us</div>
              <div className={styles.faqs}>Return policy</div>
              <div className={styles.faqs}>Shipping policy</div>
              <div className={styles.faqs}>Start a return</div>
              <div className={styles.aboutUs}>About us</div>
              <div className={styles.aboutUs}>Journal</div>
              <div className={styles.aboutUs}>Contact us</div>
            </div>
            <div className={styles.support}>Support</div>
            <div className={styles.links3}>
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
            <div className={styles.links4}>
              <div className={styles.faqs3}>FAQs</div>
              <div className={styles.contactUs3}>Contact us</div>
              <div className={styles.faqs3}>Return policy</div>
              <div className={styles.press2}>Press</div>
              <div className={styles.faqs3}>Shipping policy</div>
              <div className={styles.faqs3}>Start a return</div>
              <div className={styles.aboutUs3}>About us</div>
              <div className={styles.aboutUs3}>Journal</div>
              <div className={styles.aboutUs3}>Contact us</div>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottomContent}>
          <div className={styles.profileSettings}>© 2025 Skin—Clinic</div>
          <div className={styles.legalLinks}>
            <div className={styles.profileSettings}>Terms of service</div>
            <div className={styles.profileSettings}>Privacy policy</div>
            <div className={styles.profileSettings}>Cookies settings</div>
          </div>
        </div>
      </footer>
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
        <div className={styles.links5}>
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
      <header className={styles.globalNavigationDesktop}>
        <nav className={styles.leftLinks}>
          <div className={styles.profileSettings}>Shop</div>
          <div className={styles.profileSettings}>About us</div>
          <div className={styles.profileSettings}>Journal</div>
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
          <div className={styles.profileSettings}>Account</div>
          <div className={styles.profileSettings}>Search</div>
          <a
            className={styles.bag0}
            href="https://www.figma.com/design/XfNVMn9MjuEwh4RiYjLxM6?node-id=69-11395"
            target="_blank"
          >
            Bag (0)
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Desktop3;
