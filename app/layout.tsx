import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "DJ Realtors | Commercial, Retail & Office Spaces",
  description:
    "Discover premium commercial, retail, and office spaces across India with DJ Realtors. Strategic locations, modern amenities, and expert support",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>DJ Realtors | Commercial, Retail & Office Spaces</title>
        <meta
          name="description"
          content="Discover premium commercial, retail, and office spaces across India with DJ Realtors. Strategic locations, modern amenities, and expert support."
        />
        <meta
          property="og:title"
          content="DJ Realtors | Commercial, Retail & Office Spaces"
        />
        <meta
          property="og:description"
          content="Discover premium commercial, retail, and office spaces across India with DJ Realtors."
        />
        <meta property="og:type" content="website" />
      </head>
      <body className="font-times antialiased">
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
