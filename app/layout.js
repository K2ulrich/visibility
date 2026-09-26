import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialFloatingButtons from "@/components/SocialFloatingButtons";
import { siteConfig, seoKeywords } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}. Sites web professionnels pour PME et entrepreneurs africains`,
    template: `%s. ${siteConfig.name}`,
  },
  description:
    "Visibility conçoit des sites web modernes pour les PME, entrepreneurs et commerces de Côte d'Ivoire et d'Afrique francophone : sites vitrines, e-commerce et refontes.",
  keywords: seoKeywords,
  authors: [{ name: siteConfig.founder }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name}. Sites web professionnels pour PME et entrepreneurs africains`,
    description:
      "Des sites web modernes et professionnels pour développer la présence en ligne des entreprises africaines.",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Des sites web modernes et professionnels pour développer la présence en ligne des entreprises africaines.",
  },
  icons: {
    icon: "/icons/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SocialFloatingButtons />
      </body>
    </html>
  );
}
