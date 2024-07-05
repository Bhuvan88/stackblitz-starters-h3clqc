import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import Link from 'next/link';

import "./globals.css";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhuvanesh",
  description: "Hi, I'm react developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon_logo.png" sizes="any"  />
        <Link rel="stylesheet" id="colorPicker" href="css/color/ColorDefault.css" type="text/css" />
        <Link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&amp;display=swap" rel="stylesheet" />
        <Link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&amp;display=swap" rel="stylesheet" />
        <Link rel="stylesheet" href="/css/OwlCarousel.min.css" />
        <Link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <Script src="/js/kits.js"/>
        <Link rel="stylesheet" href="/js/magnific-popup.min.css" />
    </head>
      <body className={inter.className}>{children}
       
        <Script src="js/jquery-3.4.1.js" />
        <Script src="js/typed.min.js" />
        <Script src="js/typing.js" />
        <Script src="js/OwlCarousel.min.js" />
        <Script src="js/preloader.js" />
        <Script src="js/jquery.magnific-popup.min.js" />
        <Script src="js/particles.min.js" />
        <Script src="js/particles.js" />
        <Script src="js/main.js" />
      </body>
    </html>
  );
}
