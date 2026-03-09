import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ServiceAvailabilityBar from "@/components/ServiceAvailabilityBar";
import Footer from "@/components/Footer";
import ScreenProtection from "@/components/ScreenProtection";
import { Toaster } from "react-hot-toast";
import WhatsappIcon from "@/components/WhatsappIcon";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Modular OT & MGPS Installation in Indore | Gita Mediline Services",

  description:
    "Gita Mediline Services is a leading provider of Modular Operation Theatre (OT) and Medical Gas Pipeline System (MGPS) installation in Indore, Madhya Pradesh. We provide hospital gas pipeline installation, MGPS maintenance, HTM compliant medical gas infrastructure, and modular OT setup for hospitals.",

  keywords: [
    "Modular OT Indore",
    "MGPS installation Indore",
    "Medical Gas Pipeline System Indore",
    "Hospital gas pipeline installation",
    "Modular operation theatre setup",
    "MGPS contractor Madhya Pradesh",
    "Medical gas pipeline contractor India",
    "Hospital infrastructure services Indore",
    "oxygen pipeline hospital installation",
    "HTM compliant MGPS installation",
    "Modular OT hospital Indore",
    "medical gas engineering services",
  ],

  authors: [{ name: "Gita Mediline Services" }],

  creator: "Gita Mediline Services",

  publisher: "Gita Mediline Services",

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://gitamediline.com"),

  alternates: {
    canonical: "https://gitamediline.com",
  },

  openGraph: {
    title: "Modular OT & MGPS Installation Experts | Gita Mediline Services",
    description:
      "Hospital MGPS installation and Modular Operation Theatre solutions in Indore, Madhya Pradesh.",
    url: "https://gitamediline.com",
    siteName: "Gita Mediline Services",
    locale: "en_IN",
    type: "website",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Source+Sans+3:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Gita Mediline Services",
              image: "https://gitamediline.com/favicon.png",
              url: "https://gitamediline.com",
              telephone: "+917067534498",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Indore",
                addressRegion: "Madhya Pradesh",
                addressCountry: "India",
              },
              areaServed: "India",
              serviceType: [
                "Modular Operation Theatre Installation",
                "Medical Gas Pipeline System Installation",
                "MGPS Maintenance",
                "Hospital Gas Pipeline System",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScreenProtection />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
        <Navbar />
        {/* <ServiceAvailabilityBar /> */}
        {children}
        <Footer />
        <WhatsappIcon />
      </body>
    </html>
  );
}
