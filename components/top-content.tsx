import type { NextPage } from "next";
import Link from "next/link";
import { type CSSProperties } from "react";
import Image from "next/image";
import SkinClinicLogo from "./skin-clinic-logo";
import styles from "./top-content.module.css";

export type TopContentType = {
  className?: string;
  color?: CSSProperties["color"];
};

const TopContent: NextPage<TopContentType> = ({ className = "", color }) => {
  return (
    <div className={[styles.topContent, className].join(" ")}>
      <div className={styles.column}>
        <SkinClinicLogo color={color} />
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
          <Link href="/shop" className={styles.footerLink}>Creams</Link>
          <Link href="/shop" className={styles.footerLink}>Serums</Link>
          <Link href="/shop" className={styles.footerLink}>Lotions</Link>
          <Link href="/shop" className={styles.footerLink}>Shop all</Link>
        </div>
      </div>
      <div className={styles.column2}>
        <div className={styles.company}>Company</div>
        <div className={styles.links2}>
          <Link href="/faq" className={styles.footerLink}>FAQs</Link>
          <Link href="/contact" className={styles.footerLink}>Contact us</Link>
          <Link href="/faq" className={styles.footerLink}>Return policy</Link>
          <Link href="/faq" className={styles.footerLink}>Shipping policy</Link>
          <Link href="/contact" className={styles.footerLink}>Start a return</Link>
          <Link href="/our-story" className={styles.footerLink}>About us</Link>
          <Link href="/journal" className={styles.footerLink}>Journal</Link>
          <Link href="/contact" className={styles.footerLink}>Contact us</Link>
        </div>
        <div className={styles.support}>Support</div>
        <div className={styles.links3}>
          <Link href="/our-story" className={styles.footerLink}>About us</Link>
          <Link href="/journal" className={styles.footerLink}>Journal</Link>
          <Link href="/our-story" className={styles.footerLink}>Press</Link>
          <Link href="/faq" className={styles.footerLink}>FAQs</Link>
          <Link href="/faq" className={styles.footerLink}>Return policy</Link>
          <Link href="/faq" className={styles.footerLink}>Shipping policy</Link>
          <Link href="/contact" className={styles.footerLink}>Start a return</Link>
        </div>
      </div>
      <div className={styles.column2}>
        <div className={styles.company}>Support</div>
        <div className={styles.support}>Company</div>
        <div className={styles.links4}>
          <Link href="/faq" className={styles.footerLink}>FAQs</Link>
          <Link href="/contact" className={styles.footerLink}>Contact us</Link>
          <Link href="/faq" className={styles.footerLink}>Return policy</Link>
          <Link href="/our-story" className={styles.footerLink}>Press</Link>
          <Link href="/faq" className={styles.footerLink}>Shipping policy</Link>
          <Link href="/contact" className={styles.footerLink}>Start a return</Link>
          <Link href="/our-story" className={styles.footerLink}>About us</Link>
          <Link href="/journal" className={styles.footerLink}>Journal</Link>
          <Link href="/contact" className={styles.footerLink}>Contact us</Link>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
