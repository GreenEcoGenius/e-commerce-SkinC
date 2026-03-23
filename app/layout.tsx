import "./global.css";

import { ReactNode } from "react";
import type { Viewport } from "next";
import { CartProvider } from "../lib/cart-context";
import CookieBanner from "../components/CookieBanner";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "I SEE, YOU FEEL. | ISYF — Premium & Street Fashion",
  description: "Discover ISYF — a fashion brand where every piece carries an emotion. Premium embroidered essentials and bold street designs. Free worldwide shipping over €100.",
  keywords: "ISYF, I SEE YOU FEEL, fashion, streetwear, premium, embroidery, clothing",
  openGraph: {
    title: "I SEE, YOU FEEL. | ISYF",
    description: "Fashion born from emotion. Premium essentials and bold streetwear.",
    url: "https://iseeyoufeel.com",
    siteName: "I SEE, YOU FEEL.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <CartProvider>
          {children}
          <CookieBanner />
        </CartProvider>
      </body>
    </html>
  );
}
