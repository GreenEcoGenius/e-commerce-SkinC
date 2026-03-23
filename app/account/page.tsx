"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { createClient } from "../../lib/supabase";
import styles from "./page.module.css";

type Profile = {
  first_name: string;
  last_name: string;
  phone: string;
  shipping_address: string;
};

type EditField = "name" | "email" | "address" | "phone" | "password" | null;

export default function AccountPage() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [tab, setTab] = useState<"orders" | "profile">("orders");
  const [profile, setProfile] = useState<Profile>({ first_name: "", last_name: "", phone: "", shipping_address: "" });
  const [editField, setEditField] = useState<EditField>(null);

  // Edit form state
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editCurrentPassword, setEditCurrentPassword] = useState("");
  const [editNewPassword, setEditNewPassword] = useState("");
  const [editError, setEditError] = useState("");
  const [editLoading, setEditLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser({ id: data.user.id, email: data.user.email });
        loadProfile(data.user.id);
      }
      setCheckingAuth(false);
    });
  }, []);

  async function loadProfile(userId: string) {
    const { data } = await supabase.from("profiles").select("*").eq("id", userId).single();
    if (data) setProfile(data);
  }

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else if (data.user) {
      setUser({ id: data.user.id, email: data.user.email });
      loadProfile(data.user.id);
      router.refresh();
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    setUser(null);
    router.refresh();
  }

  function openEdit(field: EditField) {
    setEditError("");
    setEditField(field);
    if (field === "name") {
      setEditFirstName(profile.first_name);
      setEditLastName(profile.last_name);
    } else if (field === "email") {
      setEditEmail(user?.email || "");
    } else if (field === "address") {
      setEditAddress(profile.shipping_address);
    } else if (field === "phone") {
      setEditPhone(profile.phone);
    } else if (field === "password") {
      setEditCurrentPassword("");
      setEditNewPassword("");
    }
  }

  async function handleSaveEdit() {
    setEditError("");
    setEditLoading(true);

    if (editField === "name") {
      const { error } = await supabase.from("profiles").update({ first_name: editFirstName, last_name: editLastName }).eq("id", user!.id);
      if (error) { setEditError(error.message); setEditLoading(false); return; }
      setProfile((p) => ({ ...p, first_name: editFirstName, last_name: editLastName }));
    } else if (editField === "email") {
      const { error } = await supabase.auth.updateUser({ email: editEmail });
      if (error) { setEditError(error.message); setEditLoading(false); return; }
      setUser((u) => u ? { ...u, email: editEmail } : u);
    } else if (editField === "address") {
      const { error } = await supabase.from("profiles").update({ shipping_address: editAddress }).eq("id", user!.id);
      if (error) { setEditError(error.message); setEditLoading(false); return; }
      setProfile((p) => ({ ...p, shipping_address: editAddress }));
    } else if (editField === "phone") {
      const { error } = await supabase.from("profiles").update({ phone: editPhone }).eq("id", user!.id);
      if (error) { setEditError(error.message); setEditLoading(false); return; }
      setProfile((p) => ({ ...p, phone: editPhone }));
    } else if (editField === "password") {
      if (editNewPassword.length < 6) { setEditError("Password must be at least 6 characters."); setEditLoading(false); return; }
      const { error } = await supabase.auth.updateUser({ password: editNewPassword });
      if (error) { setEditError(error.message); setEditLoading(false); return; }
    }

    setEditLoading(false);
    setEditField(null);
  }

  // Loading
  if (checkingAuth) {
    return (
      <div className={styles.page}>
        <main className={styles.loginContent}>
          <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>Account</h1>
          </div>
        </main>
        <Footer />
        <Navigation />
      </div>
    );
  }

  // Signed out → login form
  if (!user) {
    return (
      <div className={styles.page}>
        <main className={styles.loginContent}>
          <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>Sign in</h1>
            {error && <p className={styles.error}>{error}</p>}
            <form className={styles.form} onSubmit={handleSignIn}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Password</label>
                <input className={styles.input} type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
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

  // Signed in → dashboard
  const fullName = [profile.first_name, profile.last_name].filter(Boolean).join(" ") || "—";

  return (
    <div className={styles.page}>
      <main className={styles.dashboard}>
        <h1 className={styles.pageTitle}>My account</h1>
        <div className={styles.dashboardLayout}>
          {/* Sidebar */}
          <nav className={styles.sidebar}>
            <button className={tab === "orders" ? styles.sidebarLinkActive : styles.sidebarLink} onClick={() => setTab("orders")}>
              Order history
            </button>
            <button className={tab === "profile" ? styles.sidebarLinkActive : styles.sidebarLink} onClick={() => setTab("profile")}>
              Profile settings
            </button>
            <button className={styles.sidebarLink} onClick={handleSignOut}>
              Log out
            </button>
          </nav>

          {/* Right content */}
          <div className={styles.rightContent}>
            {tab === "orders" && (
              <>
                <h2 className={styles.emptyTitle}>You have no orders yet</h2>
                <p className={styles.emptyDescription}>
                  Order history is empty. Once orders are placed, all order details will be displayed here.
                </p>
                <Link href="/shop">
                  <Button label="Back to shopping" variant="dark" />
                </Link>
              </>
            )}

            {tab === "profile" && (
              <div className={styles.profileGrid}>
                <div className={styles.profileCard} onClick={() => openEdit("name")}>
                  <span className={styles.profileCardLabel}>Full name</span>
                  <span className={styles.profileCardValue}>{fullName}</span>
                </div>
                <div className={styles.profileCard} onClick={() => openEdit("email")}>
                  <span className={styles.profileCardLabel}>Email address</span>
                  <span className={styles.profileCardValue}>{user.email || "—"}</span>
                </div>
                <div className={styles.profileCard} onClick={() => openEdit("address")}>
                  <span className={styles.profileCardLabel}>Shipping address</span>
                  <span className={styles.profileCardValue}>{profile.shipping_address || "—"}</span>
                </div>
                <div className={styles.profileCard} onClick={() => openEdit("phone")}>
                  <span className={styles.profileCardLabel}>Phone number</span>
                  <span className={styles.profileCardValue}>{profile.phone || "—"}</span>
                </div>
                <div className={styles.profileCard} onClick={() => openEdit("password")}>
                  <span className={styles.profileCardLabel}>Password</span>
                  <span className={styles.profileCardValue}>••••••••••••</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <Navigation />

      {/* Edit Modal */}
      {editField && (
        <div className={styles.modalOverlay} onClick={() => setEditField(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setEditField(null)}>&times;</button>

            {editField === "name" && (
              <>
                <h3 className={styles.modalTitle}>Edit full name</h3>
                <div className={styles.modalForm}>
                  <div className={styles.modalInputGroup}>
                    <label className={styles.modalLabel}>First name</label>
                    <input className={styles.modalInput} value={editFirstName} onChange={(e) => setEditFirstName(e.target.value)} />
                  </div>
                  <div className={styles.modalInputGroup}>
                    <label className={styles.modalLabel}>Last name</label>
                    <input className={styles.modalInput} value={editLastName} onChange={(e) => setEditLastName(e.target.value)} />
                  </div>
                </div>
              </>
            )}

            {editField === "email" && (
              <>
                <h3 className={styles.modalTitle}>Edit email address</h3>
                <div className={styles.modalForm}>
                  <div className={styles.modalInputGroup}>
                    <label className={styles.modalLabel}>Email address</label>
                    <input className={styles.modalInput} type="email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
                  </div>
                </div>
              </>
            )}

            {editField === "address" && (
              <>
                <h3 className={styles.modalTitle}>Edit shipping address</h3>
                <div className={styles.modalForm}>
                  <div className={styles.modalInputGroup}>
                    <label className={styles.modalLabel}>Address</label>
                    <input className={styles.modalInput} value={editAddress} onChange={(e) => setEditAddress(e.target.value)} />
                  </div>
                </div>
              </>
            )}

            {editField === "phone" && (
              <>
                <h3 className={styles.modalTitle}>Edit phone number</h3>
                <div className={styles.modalForm}>
                  <div className={styles.modalInputGroup}>
                    <label className={styles.modalLabel}>Phone number</label>
                    <input className={styles.modalInput} type="tel" value={editPhone} onChange={(e) => setEditPhone(e.target.value)} />
                  </div>
                </div>
              </>
            )}

            {editField === "password" && (
              <>
                <h3 className={styles.modalTitle}>Edit password</h3>
                <div className={styles.modalForm}>
                  <div className={styles.modalInputGroup}>
                    <label className={styles.modalLabel}>New password</label>
                    <input className={styles.modalInput} type="password" placeholder="At least 6 characters" value={editNewPassword} onChange={(e) => setEditNewPassword(e.target.value)} />
                  </div>
                </div>
              </>
            )}

            {editError && <p className={styles.modalError}>{editError}</p>}

            <div className={styles.modalButtons}>
              <button className={styles.modalButtonPrimary} onClick={handleSaveEdit} disabled={editLoading}>
                {editLoading ? "Saving..." : "Update"}
              </button>
              <button className={styles.modalButtonSecondary} onClick={() => setEditField(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
