import type { Metadata } from "next";
import { getSiteUrl } from "../lib/site";
import "./globals.css";
import Analytics from "../components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "DataClaw",
    template: "%s | DataClaw",
  },
  description:
    "Practical AI, market intelligence, and operating systems for solo founders and business operators in Thailand.",
  keywords: [
    "DataClaw",
    "AI stack Thailand",
    "solo founder tools",
    "AI operations",
    "market intelligence Thailand",
    "operator systems",
  ],
  authors: [{ name: "Jakarin Rojanaputthi" }],
  creator: "DataClaw AI",
  openGraph: {
    title: "DataClaw - Turn Signals Into Decisions.",
    description:
      "Practical AI, market intelligence, and operating systems for solo founders and business operators.",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "DataClaw website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataClaw - Turn Signals Into Decisions.",
    description:
      "Practical AI, market intelligence, and operating systems for solo founders and business operators.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
