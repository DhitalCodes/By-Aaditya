import type { Metadata } from "next";
import { Gloria_Hallelujah, Poppins } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://by-aaditya.vercel.app";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const gloriaHallelujah = Gloria_Hallelujah({
  variable: "--font-gloria",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "By Aaditya | Video Editor & Aspiring Colorist in Nepal",
    template: "%s | By Aaditya",
  },
  description:
    "By Aaditya is the portfolio of Aaditya Dhital, a video editor and aspiring colorist based in Nepal. Explore editing, motion, color grading, and thumbnail design work.",
  keywords: [
    "By Aaditya",
    "Aaditya Dhital",
    "video editor Nepal",
    "video editing portfolio",
    "aspiring colorist Nepal",
    "color grading Nepal",
    "thumbnail design Nepal",
  ],
  authors: [{ name: "Aaditya Dhital", url: siteUrl }],
  creator: "Aaditya Dhital",
  publisher: "By Aaditya",
  alternates: {
    canonical: "/",
  },
  category: "video editing portfolio",
  openGraph: {
    title: "By Aaditya | Video Editor & Aspiring Colorist in Nepal",
    description:
      "Explore the editing, motion, color grading, and thumbnail design work of Aaditya Dhital.",
    type: "website",
    siteName: "By Aaditya",
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "By Aaditya | Video Editor & Aspiring Colorist in Nepal",
    description:
      "Explore the editing, motion, color grading, and thumbnail design work of Aaditya Dhital.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aaditya Dhital",
    url: siteUrl,
    jobTitle: "Video Editor and Aspiring Colorist",
    description:
      "A video editor and aspiring colorist based in Nepal, working across editing, motion, color grading, and thumbnail design.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    sameAs: [
      "https://www.instagram.com/byaaditya.mov/",
    ],
  };

  return (
    <html lang="en" className={`${poppins.variable} ${gloriaHallelujah.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
