import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styles from "./PageLayout.module.css";

type PageLayoutProps = {
  title?: string;
  children?: ReactNode;
};

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        {title && <h1 className={styles.pageTitle}>{title}</h1>}
        {children}
      </main>
      <Footer />
      <Navigation />
    </div>
  );
}
