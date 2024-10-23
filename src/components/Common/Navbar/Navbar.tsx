"use client";
import React, { useState } from "react";
import { Text } from '@/components/Common';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Account from "@/assets/Image/account.svg";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className="relative top-0 z-20 hidden md:flex w-full justify-between items-center h-[100px]">
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
                className={`flex flex-col items-center space-y-4 mt-4 md:hidden transform ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} transition-transform duration-300 ease-in-out`}
            >
                <Text size="h7" className="text-white cursor-pointer">Equipment</Text>
                <Text size="h7" className="text-white cursor-pointer">About Us</Text>
                <Text size="h7" className="text-white cursor-pointer">Blog</Text>
                <div className="flex items-center">
                    <Image src={Account} alt="account" />
                    <Text size="h7" className="text-white ml-2 cursor-pointer">Account</Text>
                </div>
            </div>
        </div>
    );
}
