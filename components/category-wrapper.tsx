import type { NextPage } from "next";
import Image from "next/image";
import Badge3 from "./badge3";
import Article from "./article";
import styles from "./category-wrapper.module.css";

export type CategoryWrapperType = {
  className?: string;
};

const CategoryWrapper: NextPage<CategoryWrapperType> = ({ className = "" }) => {
  return (
    <div className={[styles.categoryWrapper, className].join(" ")}>
      <section className={styles.article}>
        <Image
          className={styles.imageIcon}
          loading="lazy"
          width={384}
          height={384}
          sizes="100vw"
          alt=""
          src="/Image8@2x.png"
        />
        <div className={styles.badges}>
          <Badge3 color="Gray" badgeText="Tips" />
          <Badge3 color="Gray" badgeText="Guide" />
        </div>
        <h3 className={styles.tipsForA}>Tips for a natural skincare routine</h3>
        <div className={styles.readMore}>Read more</div>
      </section>
      <Article
        image="/Image5@2x.png"
        scienceBehindEffectiveFace="Science behind effective face masks"
        color="Gray"
        badgeText="Science"
      />
      <section className={styles.article2}>
        <Image
          className={styles.imageIcon}
          loading="lazy"
          width={384}
          height={384}
          sizes="100vw"
          alt=""
          src="/Image9@2x.png"
        />
        <div className={styles.badges}>
          <Badge3 color="Gray" badgeText="Guide" />
          <Badge3 color="Gray" badgeText="Insight" />
        </div>
        <h3 className={styles.ingredientsForGlowing}>
          Ingredients for glowing skin explained
        </h3>
        <div className={styles.readMore2}>Read more</div>
      </section>
      <section className={styles.article2}>
        <Image
          className={styles.imageIcon}
          loading="lazy"
          width={384}
          height={384}
          sizes="100vw"
          alt=""
          src="/Image49@2x.png"
        />
        <div className={styles.badges}>
          <Badge3 color="Gray" badgeText="Tips" />
          <Badge3 color="Gray" badgeText="Hydration" />
        </div>
        <h3 className={styles.ingredientsForGlowing}>
          The power of daily hydration
        </h3>
        <div className={styles.readMore2}>Read more</div>
      </section>
      <section className={styles.article2}>
        <Image
          className={styles.imageIcon}
          loading="lazy"
          width={384}
          height={384}
          sizes="100vw"
          alt=""
          src="/Image52@2x.png"
        />
        <div className={styles.badges}>
          <Badge3 color="Gray" badgeText="Guide" />
          <Badge3 color="Gray" badgeText="Ingredients" />
        </div>
        <h3 className={styles.ingredientsForGlowing}>
          How to spot natural ingredients
        </h3>
        <div className={styles.readMore2}>Read more</div>
      </section>
      <section className={styles.article2}>
        <Image
          className={styles.imageIcon}
          loading="lazy"
          width={384}
          height={384}
          sizes="100vw"
          alt=""
          src="/Image48@2x.png"
        />
        <div className={styles.badges}>
          <Badge3 color="Gray" badgeText="Skincare" />
          <Badge3 color="Gray" badgeText="Reviews" />
        </div>
        <h3 className={styles.ingredientsForGlowing}>
          Top 5 face masks for all skin types
        </h3>
        <div className={styles.readMore2}>Read more</div>
      </section>
      <Article
        image="/Image55@2x.png"
        scienceBehindEffectiveFace="The science of glowing skin"
        color="Gray"
        badgeText="Science"
      />
      <section className={styles.article2}>
        <Image
          className={styles.imageIcon}
          loading="lazy"
          width={384}
          height={384}
          sizes="100vw"
          alt=""
          src="/Image56@2x.png"
        />
        <div className={styles.badges}>
          <Badge3 color="Gray" badgeText="Guide" />
          <Badge3 color="Gray" badgeText="Benefits" />
        </div>
        <h3 className={styles.ingredientsForGlowing}>
          Why choose organic skincare?
        </h3>
        <div className={styles.readMore2}>Read more</div>
      </section>
      <Article
        image="/Image53@2x.png"
        scienceBehindEffectiveFace="Morning routines for busy lives"
        color="Gray"
        badgeText="Tips"
      />
      <section className={styles.article2}>
        <Image
          className={styles.imageIcon}
          loading="lazy"
          width={384}
          height={384}
          sizes="100vw"
          alt=""
          src="/Image50@2x.png"
        />
        <div className={styles.badges}>
          <Badge3 color="Gray" badgeText="Science" />
          <Badge3 color="Gray" badgeText="Ingredients" />
        </div>
        <h3 className={styles.ingredientsForGlowing}>
          Understanding lactic acid benefits
        </h3>
        <div className={styles.readMore2}>Read more</div>
      </section>
      <section className={styles.article2}>
        <Image
          className={styles.imageIcon}
          loading="lazy"
          width={384}
          height={384}
          sizes="100vw"
          alt=""
          src="/Image54@2x.png"
        />
        <div className={styles.badges}>
          <Badge3 color="Gray" badgeText="Tips" />
          <Badge3 color="Gray" badgeText="Routine" />
        </div>
        <h3 className={styles.ingredientsForGlowing}>
          Eco-friendly skincare habits
        </h3>
        <div className={styles.readMore2}>Read more</div>
      </section>
      <section className={styles.article2}>
        <Image
          className={styles.imageIcon}
          loading="lazy"
          width={384}
          height={384}
          sizes="100vw"
          alt=""
          src="/Image511@2x.png"
        />
        <div className={styles.badges}>
          <Badge3 color="Gray" badgeText="Routine" />
          <Badge3 color="Gray" badgeText="Skincare" />
        </div>
        <h3 className={styles.ingredientsForGlowing}>
          Nighttime rituals for renewal
        </h3>
        <div className={styles.readMore2}>Read more</div>
      </section>
    </div>
  );
};

export default CategoryWrapper;
