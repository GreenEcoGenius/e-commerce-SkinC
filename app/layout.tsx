import "./global.css";

import { ReactNode } from "react";
import { CartProvider } from "../lib/cart-context";

export const metadata = {
  title: `I SEE, YOU FEEL`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
