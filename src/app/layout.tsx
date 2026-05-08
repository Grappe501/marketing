import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { getSite } from "@/lib/marketingData";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.invalid";
const noIndex = process.env.NEXT_PUBLIC_NO_INDEX === "true";
const ogDefault = "/og/reddirt-os-og.svg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: getSite().metaTitleDefault,
    template: `%s — ${getSite().shortName}`,
  },
  description: getSite().metaDescriptionDefault,
  robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: {
    siteName: getSite().ogSiteName,
    type: "website",
    locale: "en_US",
    title: getSite().metaTitleDefault,
    description: getSite().metaDescriptionDefault,
    images: [{ url: ogDefault, alt: getSite().productName }],
  },
  twitter: {
    card: "summary_large_image",
    title: getSite().metaTitleDefault,
    description: getSite().metaDescriptionDefault,
    images: [ogDefault],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
