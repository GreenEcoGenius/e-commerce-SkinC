import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./desktop10.module.css";

const Desktop10: NextPage = () => {
  return (
    <div className={styles.desktop}>
      <main className={styles.imageLeftSection}>
        <div className={styles.container}>
          <h1 className={styles.returnPolicy}>Return policy</h1>
          <div className={styles.atSkinClinicWere}>
            At Skin-Clinic, we’re committed to ensuring you love your natural
            skincare products. If you’re not completely satisfied, we’re here to
            help with a simple and transparent return process. Please review our
            policy below to understand how returns and refunds work.
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.eligibilityForReturns}>
              Eligibility for returns
            </h3>
            <div className={styles.atSkinClinicWere}>
              We accept returns within 30 days of delivery, provided the product
              is unused, unopened, and in its original packaging with all labels
              intact. This ensures the integrity of our natural skincare items
              for safety and hygiene reasons. Items purchased during promotional
              sales or with gift cards are also eligible for return under the
              same conditions.
            </div>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.eligibilityForReturns}>
              How to initiate a return
            </h3>
            <div className={styles.atSkinClinicWere}>
              To start a return, contact our customer support team via email
              with your order number and a brief reason for the return. We’ll
              provide you with a return label, which you can use to ship the
              item back to us. Please ensure the product is sent within 7 days
              of receiving the label, and keep your tracking information until
              the return is processed.
            </div>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.eligibilityForReturns}>Refund process</h3>
            <div className={styles.atSkinClinicWere}>
              Once we receive your returned item, we’ll inspect it to confirm it
              meets our return criteria. After approval, your refund will be
              processed within 5-7 business days, and the amount will be
              credited back to your original payment method. You’ll receive a
              confirmation email once the refund is complete, keeping you
              informed every step of the way.
            </div>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.eligibilityForReturns}>
              Non-returnable items
            </h3>
            <div className={styles.atSkinClinicWere}>
              Due to hygiene and safety standards, we cannot accept returns on
              used or opened products. Additionally, gift cards, free samples,
              or promotional items included with your purchase are not eligible
              for return. If you’re unsure about a product’s eligibility, reach
              out to our team, and we’ll assist you promptly.
            </div>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.eligibilityForReturns}>
              Damaged or incorrect items
            </h3>
            <div className={styles.atSkinClinicWere}>
              If your order arrives damaged or you receive the wrong product,
              please contact us within 48 hours of delivery. Include your order
              number and photos of the issue in your email, and we’ll arrange
              for a replacement to be sent to you at no additional cost. We’re
              here to ensure your experience with Skin-Clinic is seamless.
            </div>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.eligibilityForReturns}>
              Shipping costs for returns
            </h3>
            <div className={styles.atSkinClinicWere}>
              Skin-Clinic covers the cost of return shipping for damaged or
              incorrect items. For other returns, the customer is responsible
              for the return shipping fees unless otherwise stated during a
              promotional period. We recommend using a trackable shipping method
              to ensure your package reaches us safely.
            </div>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.eligibilityForReturns}>Contact us</h3>
            <div className={styles.atSkinClinicWere}>
              If you have any questions about our return policy or need
              assistance, our team is here to help. Email us at
              support@example.com, and we’ll respond within 24-48 hours. At
              Skin-Clinic, we’re dedicated to making your skincare journey
              enjoyable, from purchase to glow.
            </div>
          </div>
        </div>
      </main>
      <section className={styles.instagramSection}>
        <div className={styles.paragraph}>
          <div className={styles.followUsOn}>Follow us on instagram</div>
          <h2 className={styles.skinclinic}>@Skin—Clinic</h2>
        </div>
        <div className={styles.categoryWrapper}>
          <Image
            className={styles.instagramImageIcon}
            loading="lazy"
            width={220.8}
            height={220.8}
            sizes="100vw"
            alt=""
            src="/Instagram-Image@2x.png"
          />
          <Image
            className={styles.instagramImageIcon}
            loading="lazy"
            width={220.8}
            height={220.8}
            sizes="100vw"
            alt=""
            src="/Instagram-Image4@2x.png"
          />
          <Image
            className={styles.instagramImageIcon}
            loading="lazy"
            width={220.8}
            height={220.8}
            sizes="100vw"
            alt=""
            src="/Instagram-Image1@2x.png"
          />
          <Image
            className={styles.instagramImageIcon}
            loading="lazy"
            width={220.8}
            height={220.8}
            sizes="100vw"
            alt=""
            src="/Instagram-Image3@2x.png"
          />
          <Image
            className={styles.instagramImageIcon}
            loading="lazy"
            width={220.8}
            height={220.8}
            sizes="100vw"
            alt=""
            src="/Instagram-Image2@2x.png"
          />
        </div>
      </section>
      <section className={styles.imageWrapper}>
        <div className={styles.textInput}>
          <h1 className={styles.subscribeForExclusive}>
            Subscribe for exclusive deals
          </h1>
          <div className={styles.getExclusiveAccess}>
            Get exclusive access to the latest natural skincare deals and tips
            delivered straight to your inbox!
          </div>
          <div className={styles.input}>
            <input
              className={styles.placeholder}
              placeholder="Enter your email"
              type="text"
            />
            <div className={styles.arrow}>
              <Image
                className={styles.arrowRightAltIcon}
                loading="lazy"
                width={10}
                height={7.5}
                sizes="100vw"
                alt=""
                src="/arrow-right-alt.svg"
              />
            </div>
          </div>
        </div>
      </section>
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
            <div className={styles.followUsOn}>Products</div>
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
              <Link href="/our-story" className={styles.aboutUs}>About us</Link>
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
        <div className={styles.divider} />
        <div className={styles.bottomContent}>
          <div className={styles.termsOfService}>© 2025 Skin—Clinic</div>
          <div className={styles.legalLinks}>
            <div className={styles.termsOfService}>Terms of service</div>
            <div className={styles.termsOfService}>Privacy policy</div>
            <div className={styles.termsOfService}>Cookies settings</div>
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
          <Link href="/cart" className={styles.bag0}>
            Bag (0)
          </Link>
        </div>
      </div>
      <header className={styles.globalNavigationDesktop}>
        <nav className={styles.leftLinks}>
          <div className={styles.termsOfService}>Shop</div>
          <div className={styles.termsOfService}>About us</div>
          <div className={styles.termsOfService}>Journal</div>
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
          <div className={styles.termsOfService}>Account</div>
          <div className={styles.termsOfService}>Search</div>
          <Link href="/cart" className={styles.bag0}>
            Bag (0)
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Desktop10;
