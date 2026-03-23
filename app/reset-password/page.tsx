"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { createClient } from "../../lib/supabase";
import styles from "./page.module.css";

export default function ResetPasswordPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <div className={styles.formContainer}>
          <h1 className={styles.pageTitle}>Reset password</h1>
          {success ? (
            <div className={styles.successBox}>
              <p className={styles.successText}>Check your email for a password reset link.</p>
              <Link href="/account" className={styles.backLink}>Back to sign in</Link>
            </div>
          ) : (
            <>
              <p className={styles.description}>Enter your email and we&apos;ll send you a password reset link.</p>
              {error && <p className={styles.error}>{error}</p>}
              <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input} type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <Button label={loading ? "Sending..." : "Reset password"} variant="dark" fullWidth />
              </form>
              <Link href="/account" className={styles.backLink}>Back to sign in</Link>
            </>
          )}
        </div>
      </main>
      <Footer />
      <Navigation />
    </div>
  );
}
