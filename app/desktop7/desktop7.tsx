import type { NextPage } from "next";
import Image from "next/image";
import styles from "./desktop7.module.css";

const Desktop7: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <header className={styles.globalNavigationDesktop}>
        <nav className={styles.leftLinks}>
          <div className={styles.shop}>Shop</div>
          <div className={styles.shop}>About us</div>
          <div className={styles.shop}>Journal</div>
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
          <div className={styles.shop}>Account</div>
          <div className={styles.shop}>Search</div>
          <a
            className={styles.bag0}
            href="https://www.figma.com/design/XfNVMn9MjuEwh4RiYjLxM6?node-id=69-11395"
            target="_blank"
          >
            Bag (0)
          </a>
        </nav>
      </header>
      <main className={styles.imageLeftSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.myAccount}>My account</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.leftTabLinks}>
              <div className={styles.shop}>Order history</div>
              <div className={styles.profileSettings}>Profile settings</div>
              <div className={styles.shop}>Log out</div>
            </div>
            <section className={styles.rightContent}>
              <div className={styles.row}>
                <div className={styles.settingTile}>
                  <div className={styles.title}>Full name</div>
                  <div className={styles.value}>Sara Chen</div>
                </div>
                <div className={styles.settingTile}>
                  <div className={styles.title}>Email address</div>
                  <div className={styles.value}>sarachen@example.com</div>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.settingTile}>
                  <div className={styles.title}>Shipping address</div>
                  <div className={styles.value}>
                    151 O’Connor St, Ottawa, ON, K2P 2JS, Canada
                  </div>
                </div>
                <div className={styles.settingTile}>
                  <div className={styles.title}>Phone number</div>
                  <div className={styles.value}>+1 222 333 4444</div>
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.settingTile5}>
                  <div className={styles.title}>Password</div>
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
            <div className={styles.links}>
              <div className={styles.title}>Creams</div>
              <div className={styles.title}>Serums</div>
              <div className={styles.title}>Lotions</div>
              <div className={styles.title}>Shop all</div>
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
              <div className={styles.aboutUs2}>About us</div>
              <div className={styles.aboutUs2}>Journal</div>
              <div className={styles.aboutUs2}>Contact us</div>
            </div>
            <div className={styles.support}>Support</div>
            <div className={styles.links3}>
              <div className={styles.press}>About us</div>
              <div className={styles.press}>Journal</div>
              <div className={styles.press}>Press</div>
              <div className={styles.aboutUs2}>FAQs</div>
              <div className={styles.aboutUs2}>Return policy</div>
              <div className={styles.aboutUs2}>Shipping policy</div>
              <div className={styles.aboutUs2}>Start a return</div>
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
              <div className={styles.aboutUs4}>About us</div>
              <div className={styles.aboutUs4}>Journal</div>
              <div className={styles.aboutUs4}>Contact us</div>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottomContent}>
          <div className={styles.shop}>© 2025 Skin—Clinic</div>
          <div className={styles.legalLinks}>
            <div className={styles.shop}>Terms of service</div>
            <div className={styles.shop}>Privacy policy</div>
            <div className={styles.shop}>Cookies settings</div>
          </div>
        </div>
      </footer>
      <main className={styles.tone} />
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
      <section className={styles.modalWindow}>
        <div className={styles.header2}>
          <h3 className={styles.requestLinkSent}>Request link sent</h3>
          <div className={styles.pleaseVerifyYour}>
            Please verify your email. Instructions for password reset will be
            dispatched shortly.
          </div>
        </div>
        <Image
          className={styles.closeIcon}
          width={24}
          height={24}
          sizes="100vw"
          alt=""
          src="/close.svg"
        />
      </section>
    </div>
  );
};

export default Desktop7;
