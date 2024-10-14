import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./globals.css";
import Header from "../components/header/Header";
import Footer from "@/components/Footer";
const KufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["300", "500"],
});
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Cloud Hosting",
  description: "Cloud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={KufiArabic.className}>
        <Header />
        <ToastContainer theme="colored" position="top-center" />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
