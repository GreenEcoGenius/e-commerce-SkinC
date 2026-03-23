import "./global.css";
    
    import { ReactNode } from "react";
    

    
      export const metadata = {
        title: `Skin—Clinic _ Figma Design E-commerce Template`,
      }
    

    export default function RootLayout({
      children,
    }: { children: React.ReactNode }) {
      
      return (
        <html lang="en" suppressHydrationWarning>
          
          <body suppressHydrationWarning>{children}</body>
        </html>
      )
    }
