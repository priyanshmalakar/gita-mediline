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
  title: "Gita Mediline Services | MGPS & Modular OT Specialists",

  description:
    "Gita Mediline Services provides MGPS supply, installation, testing, commissioning and maintenance along with Modular Operation Theatre solutions for hospitals. HTM compliant medical gas infrastructure specialists in Madhya Pradesh.",

  keywords: [
    "MGPS installation",
    "medical gas pipeline system",
    "hospital gas pipeline",
    "modular operation theatre",
    "medical gas contractor",
    "MGPS maintenance",
    "hospital infrastructure services",
    "HTM compliant MGPS",
    "oxygen pipeline hospital",
    "medical gas engineering"
  ],

  authors: [{ name: "Gita Mediline Services" }],

  openGraph: {
    title: "MGPS & Modular OT Infrastructure Experts",
    description:
      "Certified hospital medical gas pipeline and modular OT solutions.",
    url: "https://gitamediline.com",
    siteName: "Gita Mediline Services",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        <WhatsappIcon/>
      </body>
    </html>
  );
}
