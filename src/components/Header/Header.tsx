"use client";
import React, { useEffect, useState } from "react";
import { PaddingContainer, Text } from '@/components/Common';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Account from "@/assets/Image/account.svg";
import Rectangle from "@/assets/Image/rectangle.svg";
import Arrow from "@/assets/Image/arrow.svg";
import Image from "next/image";
import Slider from "./Slider";
import FollowUs from "./FollowUs";
import parallax from "@/assets/Image/parallax.png";

export default function Header() {
    const [imagePosition, setImagePosition] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
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
        <div className="relative top-0 inset-0 z-10 ">
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

                <div className="hidden md:flex w-full justify-between items-center mt-[40px]">
                    <div className="flex h-[24px] w-[108px] text-center items-center">
                        <Text size="h3" className="text-white">MNTN</Text>
                    </div>
                    <div className="flex gap-10 text-center items-center">
                        <Text size="h7" className="text-white cursor-pointer">Equipment</Text>
                        <Text size="h7" className="text-white cursor-pointer">About Us</Text>
                        <Text size="h7" className="text-white cursor-pointer">Blog</Text>
                    </div>
                    <div className="flex">
                        <Image src={Account} alt="account" />
                        <Text size="h7" className="text-white ml-2 cursor-pointer">Account</Text>
                    </div>
                </div>
                <div className="flex md:hidden justify-between items-center mt-6">
                    <Text size="h3" className="text-white">MNTN</Text>
                    <div onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <AiOutlineClose className="text-white text-2xl" /> : <AiOutlineMenu className="text-white text-2xl" />}
                    </div>
                </div>
                <div
                    className={`
                        flex flex-col items-center space-y-4 mt-4 md:hidden
                        transform ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
                        transition-transform duration-300 ease-in-out
                    `}
                >
                    <Text size="h7" className="text-white cursor-pointer">Equipment</Text>
                    <Text size="h7" className="text-white cursor-pointer">About Us</Text>
                    <Text size="h7" className="text-white cursor-pointer">Blog</Text>
                    <div className="flex items-center">
                        <Image src={Account} alt="account" />
                        <Text size="h7" className="text-white ml-2 cursor-pointer">Account</Text>
                    </div>
                </div>

                <div className="absolute w-[355px] md:w-[650px] h-[200px] top-[230px] md:top-[287px] md:left-[420px] mt-0">
                    <div className="flex justify-start md:justify-start">
                        <Image src={Rectangle} alt="rectangle" />
                        <Text size="h5" className="ml-4 md:ml-[24px] text-[#FBD784] tracking-[4px] md:tracking-[6px]">A HIKING GUIDE</Text>
                    </div>
                    <Text size="h1" className="text-white">Be prepared for the Mountains and beyond!</Text>

                    <div className="flex justify-start md:justify-start gap-2 mt-6 md:mt-4">
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
