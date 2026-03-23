import type { NextPage } from "next";
import Image from "next/image";
import styles from "./desktop1.module.css";

const Desktop1: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <main className={styles.imageLeftSection}>
        <form className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.createAnAccount}>Create an account</h1>
          </div>
          <section className={styles.inputs}>
            <div className={styles.inputAlt}>
              <div className={styles.label}>First name</div>
              <div className={styles.input}>
                <input
                  className={styles.placeholder}
                  placeholder="John"
                  type="text"
                />
                <div className={styles.arrow}>
                  <Image
                    className={styles.arrowRightAltIcon}
                    width={10}
                    height={7.5}
                    sizes="100vw"
                    alt=""
                    src="/arrow-right-alt.svg"
                  />
                </div>
              </div>
              <div className={styles.hintText}>Hint text</div>
            </div>
            <div className={styles.inputAlt}>
              <div className={styles.label}>Last name</div>
              <div className={styles.input}>
                <input
                  className={styles.placeholder}
                  placeholder="Doe"
                  type="text"
                />
                <div className={styles.arrow}>
                  <Image
                    className={styles.arrowRightAltIcon2}
                    width={10}
                    height={7.5}
                    sizes="100vw"
                    alt=""
                    src="/arrow-right-alt.svg"
                  />
                </div>
              </div>
              <div className={styles.hintText}>Hint text</div>
            </div>
            <div className={styles.inputAlt}>
              <div className={styles.label}>Email address</div>
              <div className={styles.input}>
                <input
                  className={styles.placeholder}
                  placeholder="johndoe@example.com"
                  type="text"
                />
                <div className={styles.arrow}>
                  <Image
                    className={styles.arrowRightAltIcon2}
                    width={10}
                    height={7.5}
                    sizes="100vw"
                    alt=""
                    src="/arrow-right-alt.svg"
                  />
                </div>
              </div>
              <div className={styles.hintText}>Hint text</div>
            </div>
            <div className={styles.inputAlt}>
              <div className={styles.label}>Password</div>
              <div className={styles.input}>
                <input
                  className={styles.placeholder4}
                  placeholder="*************************"
                  type="text"
                />
                <div className={styles.visibility}>
                  <Image
                    className={styles.visibilityOffIcon}
                    width={13.9}
                    height={12.5}
                    sizes="100vw"
                    alt=""
                    src="/visibility-off.svg"
                  />
                </div>
              </div>
              <div className={styles.hintText}>Hint text</div>
            </div>
            <div className={styles.checkbox}>
              <input className={styles.checkboxIcon} type="checkbox" />
              <div className={styles.checkboxLabel}>
                {`By clicking here, I agree to the `}
                <span className={styles.termsOfService}>Terms of service</span>
                {` and `}
                <span className={styles.termsOfService}>Privacy policy</span>.
              </div>
            </div>
            <div className={styles.checkbox}>
              <input className={styles.checkboxIcon} type="checkbox" />
              <div className={styles.checkboxLabel}>
                Subscribe for updates on products, events, and more. Unsubscribe
                anytime.
              </div>
            </div>
          </section>
          <button className={styles.buttons} type="submit">
            <button className={styles.button} type="submit">
              <div className={styles.buttonLabel}>Create account</div>
            </button>
          </button>
        </form>
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
          <div className={styles.skinclinic}>© 2025 Skin—Clinic</div>
          <div className={styles.legalLinks}>
            <div className={styles.skinclinic}>Terms of service</div>
            <div className={styles.skinclinic}>Privacy policy</div>
            <div className={styles.skinclinic}>Cookies settings</div>
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
          <div className={styles.skinclinic}>Shop</div>
          <div className={styles.skinclinic}>About us</div>
          <div className={styles.skinclinic}>Journal</div>
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
          <div className={styles.skinclinic}>Account</div>
          <div className={styles.skinclinic}>Search</div>
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

export default Desktop1;
