import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styles from "../legal.module.css";

export default function CookiesPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h1 className={styles.title}>Cookie Policy</h1>
        <p className={styles.paragraph}>
          GreenEcoGenius O&Uuml; (&ldquo;I SEE, YOU FEEL.&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) uses cookies and similar technologies on iseeyoufeel.com. This policy explains what cookies are, how we use them, and how you can manage your preferences.
        </p>

        <h2 className={styles.sectionTitle}>What Are Cookies?</h2>
        <p className={styles.paragraph}>
          Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences, keep you logged in, and understand how you interact with the content.
        </p>

        <h2 className={styles.sectionTitle}>Cookies We Use</h2>

        <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1rem" }}>Essential Cookies</h3>
        <p className={styles.paragraph}>
          These cookies are strictly necessary for the website to function. They enable core features such as shopping cart, checkout, and account authentication. They cannot be disabled.
        </p>
        <ul className={styles.list}>
          <li><strong>Session cookie</strong> &mdash; keeps you logged in during your visit</li>
          <li><strong>Cart cookie</strong> &mdash; remembers items in your shopping bag</li>
          <li><strong>CSRF token</strong> &mdash; protects against cross-site request forgery</li>
        </ul>

        <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1rem" }}>Analytics Cookies</h3>
        <p className={styles.paragraph}>
          We use analytics cookies to understand how visitors interact with our website. This helps us improve the user experience. Data is anonymized and aggregated.
        </p>
        <ul className={styles.list}>
          <li><strong>Google Analytics</strong> &mdash; tracks page views, session duration, and traffic sources</li>
        </ul>

        <h3 className={styles.sectionTitle} style={{ fontSize: "1rem", marginTop: "1rem" }}>Marketing Cookies</h3>
        <p className={styles.paragraph}>
          Marketing cookies are used to deliver relevant advertisements and measure the effectiveness of our campaigns. These cookies are only set with your consent.
        </p>
        <ul className={styles.list}>
          <li><strong>Meta Pixel</strong> &mdash; helps measure ad performance on Instagram and Facebook</li>
          <li><strong>TikTok Pixel</strong> &mdash; tracks conversions from TikTok campaigns</li>
        </ul>

        <h2 className={styles.sectionTitle}>Managing Your Preferences</h2>
        <p className={styles.paragraph}>
          You can manage or withdraw your cookie consent at any time. Most browsers allow you to block or delete cookies through their settings:
        </p>
        <ul className={styles.list}>
          <li><strong>Chrome:</strong> Settings &rarr; Privacy and Security &rarr; Cookies</li>
          <li><strong>Safari:</strong> Preferences &rarr; Privacy</li>
          <li><strong>Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Cookies</li>
          <li><strong>Edge:</strong> Settings &rarr; Cookies and site permissions</li>
        </ul>
        <p className={styles.paragraph}>
          Please note that disabling essential cookies may affect the functionality of the website (e.g., you may not be able to add items to your cart or complete a purchase).
        </p>

        <h2 className={styles.sectionTitle}>Data Retention</h2>
        <p className={styles.paragraph}>
          Session cookies are deleted when you close your browser. Persistent cookies remain on your device for up to 13 months, unless you delete them sooner.
        </p>

        <h2 className={styles.sectionTitle}>Your Rights</h2>
        <p className={styles.paragraph}>
          Under the GDPR and ePrivacy Directive, you have the right to be informed about and consent to the use of non-essential cookies. You may also request access to or deletion of any personal data collected through cookies.
        </p>

        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.paragraph}>
          If you have questions about our use of cookies, please contact us at contact@iseeyoufeel.com or write to: GreenEcoGenius O&Uuml;, Tornimäe tn 5, 10145 Tallinn, Estonia.
        </p>
      </main>
      <Footer />
      <Navigation />
    </div>
  );
}
