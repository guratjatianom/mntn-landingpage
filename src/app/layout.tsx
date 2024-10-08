import type { Metadata } from "next";
import "./globals.css";
import { playfair_display, montserrat } from "./fonts/fonts";
import Image from "next/image";
import Pemandangan from "@/assets/Image/BGgroup.svg";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Hiking guide",
  description: "A Hiking Guide Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body
        className={`${playfair_display.variable} ${montserrat.variable} antialiased`}
      >
        <div className="absolute inset-0 z-0 w-full h-[4300px]">
          <Image
            src={Pemandangan}
            alt="background image"
            layout="fill"
            objectFit="none"
            quality={30}
            className="z-0"
          />
        </div>
        <Header />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
