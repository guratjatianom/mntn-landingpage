"use client";
import React, { useState } from "react";
import { PaddingContainer, Text } from '@/components/Common';
import Instagram from "@/assets/Image/instagram.svg";
import Twitter from "@/assets/Image/twitter.svg";
import Rectangle from "@/assets/Image/rectangle.svg";
import Arrow from "@/assets/Image/arrow.svg";
import Image from "next/image";

export default function Header() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = ["01", "02", "03"];

    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="absolute top-0 inset-0">
            <PaddingContainer>
                <div className="flex w-[1150px] justify-between text-center items-center mt-[40px]">
                    <div className="flex h-[24px] w-[108px] text-center items-center">
                        <Text size="h3" className="text-white">MNTN</Text>
                    </div>
                    <div className="flex gap-10 text-center items-center">
                        <Text size="h7" className="text-white">Equipment</Text>
                        <Text size="h7" className="text-white">About Us</Text>
                        <Text size="h7" className="text-white">Blog</Text>
                    </div>
                    <div className="flex">
                        <Text size="h7" className="text-white">Account</Text>
                    </div>
                </div>
                <div className="flex flex-col text-center items-center absolute w-auto h-auto top-[380px] left-[60px]">
                    <Text size="h7" className="text-center items-center transform rotate-90 text-white">Follow us</Text>
                    <div>
                        <Image src={Instagram} alt="instagram" className="mt-14" />
                        <Image src={Twitter} alt="twitter" className="mt-6" />
                    </div>
                </div>
                <div>
                    <div className="absolute w-[650px] h-[200px] top-[287px] left-[420px] gap-[32px] mt-8">
                        <div className="flex">
                            <Image src={Rectangle} alt="rectangle"/>
                            <Text size="h5" className="left-[104px] text-[#FBD784] ml-[24px] tracking-[6px]">A HIKING GUIDE</Text>
                        </div>
                        <Text size="h1" className="text-white">Be prepared for the Mountains and beyond!</Text>
                        <div className="flex gap-2">
                            <Text size="h7" className="text-white">scroll down</Text>
                            <Image src={Arrow} alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div className="absolute left-[1200px] top-[326px] w-[77px] h-[240px] flex flex-col justify-between items-center">
                    <div className="cursor-pointer" onClick={prevSlide}>
                        <Text size="h7" className="text-white">Start</Text>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        {slides.map((slide, index) => (
                            <div key={index}>
                                <Text
                                    size="h7"
                                    className={`text-white ${currentSlide === index ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}
                                >
                                    {slide}
                                </Text>
                            </div>
                        ))}
                    </div>
                    <div className="h-1 w-full bg-white"></div>
                </div>
            </PaddingContainer>
        </div>
    );
}
