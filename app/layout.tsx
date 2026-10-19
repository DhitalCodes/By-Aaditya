import type { Metadata } from "next";
import { Gloria_Hallelujah, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "By Aaditya | Editor & Aspiring Colorist",
  description:
    "By Aaditya is the portfolio of Aaditya Dhital, an editor and aspiring colorist based in Nepal.",
  openGraph: {
    title: "By Aaditya | Editor & Aspiring Colorist",
    description:
      "The portfolio of Aaditya Dhital, a video editor and aspiring colorist based in Nepal.",
    type: "website",
    siteName: "By Aaditya",
  },
  twitter: {
    card: "summary",
    title: "By Aaditya | Editor & Aspiring Colorist",
    description:
      "The portfolio of Aaditya Dhital, a video editor and aspiring colorist based in Nepal.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${gloriaHallelujah.variable}`}>
      <body>{children}</body>
    </html>
  );
}
