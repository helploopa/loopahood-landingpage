import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loopa — Neighbourhood Commerce Platform",
  description:
    "Connect with local makers and discover handcrafted goods from your neighbours. Join the waitlist for Loopa.",
  openGraph: {
    title: "Loopa — Connect Neighbours for Real",
    description:
      "Connect with local makers and discover handcrafted goods from your neighbours.",
    siteName: "Loopa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loopa — Connect Neighbours for Real",
    description:
      "Connect with local makers and discover handcrafted goods from your neighbours.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#0b0b0e" }}>
        {children}
      </body>
    </html>
  );
}
