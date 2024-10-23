"use client";
import React, { useEffect, useState } from "react";
import { PaddingContainer, Text } from '@/components/Common';
import Image from "next/image";
import Slider from "./Slider";
import FollowUs from "./FollowUs";
import { Navbar } from "../Common";
import parallax from "@/assets/Image/parallax.png";
import Rectangle from "@/assets/Image/rectangle.svg";
import Arrow from "@/assets/Image/arrow.svg";

export default function Header() {
    const [imagePosition, setImagePosition] = useState(0);
    const [topPosition, setTopPosition] = useState<string>("");

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setImagePosition(scrollTop * 0.1);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);

            const updateTopPosition = () => {
                const position = window.innerWidth < 768
                    ? `calc(975px - ${imagePosition}px)`
                    : `calc(768px - ${imagePosition}px)`;
                setTopPosition(position);
            };

            updateTopPosition();
            window.addEventListener("resize", updateTopPosition);

            return () => {
                window.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", updateTopPosition);
            };
        }
    }, [imagePosition]);

    return (
        <div className="relative">
            <PaddingContainer>
                <Image
                    src={parallax}
                    alt="parallax background"
                    className="z-0 absolute left-0"
                    style={{
                        width: "100vw",
                        height: "auto",
                        top: topPosition,
                        transition: "top 0.1s ease-out",
                    }}
                />
                <Navbar />
                <div className="absolute w-[355px] md:w-[650px] h-[200px] top-[230px] md:top-[287px] md:left-[420px] mt-0">
                    <div className="flex justify-start">
                        <Image src={Rectangle} alt="rectangle" />
                        <Text size="h5" className="ml-4 md:ml-[24px] text-[#FBD784] tracking-[4px] md:tracking-[6px]">A HIKING GUIDE</Text>
                    </div>
                    <Text size="h1" className="text-white">Be prepared for the Mountains and beyond!</Text>
                    <div className="flex justify-start gap-2 mt-6 md:mt-4">
                        <Text size="h7" className="text-white">scroll down</Text>
                        <Image src={Arrow} alt="arrow" />
                    </div>
                </div>
                <FollowUs />
                <Slider />
            </PaddingContainer>
        </div>
    );
}
