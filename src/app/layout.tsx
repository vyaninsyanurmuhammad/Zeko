import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/provider";
import NextUILocalProvider from "@/nextui/provider";
import dynamic from "next/dynamic";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zeko!",
  description:
    "Welcome to Zeko! We are a dedicated team committed to providing creative and innovative solutions for your web design and development needs. Explore our services encompassing responsive web design, app development, and more. Join us and bring your digital vision to life with Zeko!",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    images: [
      {
        url: "https://images.ctfassets.net/uflk394shvqp/5o1Cfu9beRn5uX05U1Lop/ff37576cfe028f96e7158a6180fc202e/_a2c1a272-f443-4cc1-869b-40498ea082e6.jpeg",
        width: 800,
        height: 600,
      },
     
    ],
  },
};

const Navbar = dynamic(() => import("@/components/navbar"), {
  ssr: false,
});

const Footbar = dynamic(() => import("@/components/footbar"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <NextUILocalProvider>
            <Navbar />
            <div className="h-full w-full flex flex-col">
              {children}
              <Footbar />
            </div>
          </NextUILocalProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
