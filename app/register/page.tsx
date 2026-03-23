"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { createClient } from "../../lib/supabase";
import styles from "./page.module.css";

export default function RegisterPage() {
  const supabase = createClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
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
          <h1 className={styles.pageTitle}>Create account</h1>

          {success ? (
            <div className={styles.successBox}>
              <p className={styles.successText}>
                Account created! Check your email to confirm your account, then <Link href="/account"><strong>sign in</strong></Link>.
              </p>
            </div>
          ) : (
            <>
              {error && <p className={styles.error}>{error}</p>}
              <form className={styles.form} onSubmit={handleSignUp}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Email</label>
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Password</label>
                  <input
                    className={styles.input}
                    type="password"
                    placeholder="At least 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Confirm password</label>
                  <input
                    className={styles.input}
                    type="password"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <Button label={loading ? "Creating account..." : "Create account"} variant="dark" fullWidth />
              </form>
              <p className={styles.signInLink}>
                Already have an account? <Link href="/account"><strong>Sign in</strong></Link>
              </p>
            </>
          )}
        </div>
      </main>
      <Footer />
      <Navigation />
    </div>
  );
}
