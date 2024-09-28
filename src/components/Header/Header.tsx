"use client";
import React from "react";
import { PaddingContainer, Text } from '@/components/Common';
import Account from "@/assets/Image/account.svg";
import Rectangle from "@/assets/Image/rectangle.svg";
import Arrow from "@/assets/Image/arrow.svg";
import Image from "next/image";
import Slider from "./Slider";  
import FollowUs from "./FollowUs";

export default function Header() {
    return (
        <div className="absolute top-0 inset-0">
            <PaddingContainer>
                <div className="flex w-[1150px] h-[25px] justify-between text-center items-center mt-[40px]">
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
                <FollowUs />
                <div>
                    <div className="absolute w-[650px] h-[200px] top-[287px] left-[420px] gap-[32px] mt-8">
                        <div className="flex">
                            <Image src={Rectangle} alt="rectangle" />
                            <Text size="h5" className="left-[104px] text-[#FBD784] ml-[24px] tracking-[6px]">A HIKING GUIDE</Text>
                        </div>
                        <Text size="h1" className="text-white">Be prepared for the Mountains and beyond!</Text>
                        <div className="flex gap-2">
                            <Text size="h7" className="text-white">scroll down</Text>
                            <Image src={Arrow} alt="arrow" />
                        </div>
                    </div>
                </div>
                <Slider />
            </PaddingContainer>
        </div>
    );
}
