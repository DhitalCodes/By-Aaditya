import type { Metadata } from "next";
import { Gloria_Hallelujah, Poppins } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://by-aaditya.vercel.app");

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
  applicationName: "By Aaditya",
  referrer: "origin-when-cross-origin",
  verification: {
    google: "googlef4c41d978e15c100",
  },
  formatDetection: {
    telephone: false,
  },
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
    images: [
      {
        url: "/portfolio-assets/images/profile/profile-pic.png",
        width: 900,
        height: 1100,
        alt: "Aaditya Dhital, video editor and aspiring colorist in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "By Aaditya | Video Editor & Aspiring Colorist in Nepal",
    description:
      "Explore the editing, motion, color grading, and thumbnail design work of Aaditya Dhital.",
    images: ["/portfolio-assets/images/profile/profile-pic.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "By Aaditya",
        alternateName: ["By Aaditya portfolio", "By Aaditya video editing"],
        url: siteUrl,
        description:
          "The portfolio of Aaditya Dhital, a video editor and aspiring colorist based in Nepal.",
        inLanguage: "en",
      },
      {
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
        knowsAbout: [
          "Video editing",
          "Color grading",
          "Motion graphics",
          "Thumbnail design",
        ],
        sameAs: [
          "https://www.instagram.com/byaaditya.mov/",
          "https://www.linkedin.com/in/aaditya-dhital/?isSelfProfile=true",
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${poppins.variable} ${gloriaHallelujah.variable}`}>
      <head>
        <meta name="google-site-verification" content="googlef4c41d978e15c100" />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
