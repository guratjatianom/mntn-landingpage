import type { Metadata } from "next";
import "./globals.css";
import { playfair_display, montserrat } from "./fonts/fonts";
import Image from "next/image";
import Pemandangan from "@/assets/Image/bggroup.png";
import Header from "@/components/Header/Header";
import { PaddingContainer } from "@/components/Common";

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
      <body
        className={`${playfair_display.variable} ${montserrat.variable} bg-[#0B1D26] antialiased`}
      >
        <div className="absolute inset-0 z-0 w-full md:w-full h-[3400px] md:h-[4300px]">
          <Image
            src={Pemandangan}
            alt="background image"
            layout="fill"
            objectFit="cover"
            quality={30}
            className="z-0"
          />
        </div>
        <Header />
        <PaddingContainer>{children}</PaddingContainer>
      </body>
    </html>
  );
}
