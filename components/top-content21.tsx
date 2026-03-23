import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import SkinClinicLogo4 from "./skin-clinic-logo21";
import styles from "./top-content21.module.css";

export type TopContent4Type = {
  className?: string;
  color?: CSSProperties["color"];
};

const TopContent4: NextPage<TopContent4Type> = ({ className = "", color }) => {
  return (
    <div className={[styles.topContent, className].join(" ")}>
      <div className={styles.column}>
        <SkinClinicLogo4 color={color} />
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
  );
};

export default TopContent4;
