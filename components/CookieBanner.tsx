"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p className={styles.text}>
          We use cookies to improve your experience and analyze site traffic. By clicking &ldquo;Accept&rdquo;, you consent to our use of cookies.{" "}
          <Link href="/cookies" className={styles.link}>Learn more</Link>
        </p>
        <div className={styles.actions}>
          <button className={styles.decline} onClick={decline}>Decline</button>
          <button className={styles.accept} onClick={accept}>Accept</button>
        </div>
      </div>
    </div>
  );
}
