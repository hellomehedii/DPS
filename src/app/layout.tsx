import type { Metadata } from "next";
import {
  contactAddress,
  contactEmail,
  contactPhoneNumbers,
  siteDescription,
  siteName,
  siteUrl,
} from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Architecture, Engineering and Construction`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "DPS Project Solutions",
    "architectural design",
    "engineering consultancy",
    "construction solutions",
    "project management",
    "turnkey construction",
    "material supply",
    "Bangladesh construction company",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | Architecture, Engineering and Construction`,
    description: siteDescription,
    url: "/",
    siteName,
    images: [
      {
        url: "/Banner_background.png",
        width: 1200,
        height: 630,
        alt: `${siteName} construction and project solutions`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Architecture, Engineering and Construction`,
    description: siteDescription,
    images: ["/Banner_background.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/DPS_Logo_PNG.png`,
    image: `${siteUrl}/Banner_background.png`,
    description: siteDescription,
    email: contactEmail,
    telephone: contactPhoneNumbers[0],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    areaServed: contactAddress,
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
