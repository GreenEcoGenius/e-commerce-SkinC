"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { createClient } from "../../lib/supabase";
import styles from "./page.module.css";

export default function AccountPage() {
  const supabase = createClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setCheckingAuth(false);
    });
  }, []);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      router.push("/");
      router.refresh();
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    setUser(null);
    router.refresh();
  }

  if (checkingAuth) {
    return (
      <div className={styles.page}>
        <main className={styles.content}>
          <div className={styles.formContainer}>
            <h1 className={styles.pageTitle}>Account</h1>
          </div>
        </main>
        <Footer />
        <Navigation />
      </div>
    );
  }

  if (user) {
    return (
      <div className={styles.page}>
        <main className={styles.content}>
          <div className={styles.formContainer}>
            <h1 className={styles.pageTitle}>My account</h1>
            <p className={styles.welcomeText}>
              Signed in as <strong>{user.email}</strong>
            </p>
            <button className={styles.signOutButton} onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </main>
        <Footer />
        <Navigation />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <div className={styles.formContainer}>
          <h1 className={styles.pageTitle}>Sign in</h1>
          {error && <p className={styles.error}>{error}</p>}
          <form className={styles.form} onSubmit={handleSignIn}>
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button label={loading ? "Signing in..." : "Sign in"} variant="dark" fullWidth />
          </form>
          <div className={styles.dividerRow}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>or</span>
            <div className={styles.dividerLine} />
          </div>
          <p className={styles.registerLink}>
            Don&apos;t have an account? <Link href="/register"><strong>Create one</strong></Link>
          </p>
        </div>
      </main>
      <Footer />
      <Navigation />
    </div>
  );
}
