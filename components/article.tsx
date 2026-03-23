import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import Badge3 from "./badge3";
import styles from "./article.module.css";

export type ArticleType = {
  className?: string;
  image: string;
  scienceBehindEffectiveFace?: string;
  color?: CSSProperties["color"];
  badgeText?: string;
};

const Article: NextPage<ArticleType> = ({
  className = "",
  image,
  scienceBehindEffectiveFace,
  color,
  badgeText,
}) => {
  return (
    <section className={[styles.article, className].join(" ")}>
      <Image
        className={styles.imageIcon}
        loading="lazy"
        width={384}
        height={384}
        sizes="100vw"
        alt=""
        src={image}
      />
      <div className={styles.badges}>
        <Badge3 color={color} badgeText={badgeText} />
      </div>
      <h3 className={styles.scienceBehindEffective}>
        {scienceBehindEffectiveFace}
      </h3>
      <div className={styles.readMore}>Read more</div>
    </section>
  );
};

export default Article;
