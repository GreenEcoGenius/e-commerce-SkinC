import Link from "next/link";
import Navigation from "../../components/Navigation";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export default function AccountPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <div className={styles.formContainer}>
          <h1 className={styles.pageTitle}>Sign in</h1>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email</label>
              <input className={styles.input} type="email" placeholder="your@email.com" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Password</label>
              <input className={styles.input} type="password" placeholder="Enter your password" />
            </div>
            <span className={styles.forgotLink}>Forgot password?</span>
            <Button label="Sign in" variant="dark" fullWidth />
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
