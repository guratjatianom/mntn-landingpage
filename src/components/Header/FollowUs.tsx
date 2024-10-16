import React from "react";
import { Text } from '@/components/Common';
import Instagram from "@/assets/Image/instagram.svg";
import Twitter from "@/assets/Image/twitter.svg";
import Image from "next/image";

export default function FollowUs() {
    return (
        <>
            {/* Versi Desktop */}
            <div className="hidden md:flex flex-col text-center items-center absolute w-auto h-auto top-[380px] left-[60px]">
                <Text size="h7" className="text-center items-center transform rotate-90 text-white cursor-pointer">
                    Follow us
                </Text>
                <div>
                    <Image src={Instagram} alt="instagram" className="mt-14 cursor-pointer" />
                    <Image src={Twitter} alt="twitter" className="mt-6 cursor-pointer" />
                </div>
            </div>

            {/* Versi Mobile */}
            <div className="absolute flex md:hidden flex-row justify-center items-center top-[100px] space-x-6 mt-0">
                <Text size="h7" className="text-white cursor-pointer">Follow us</Text>
                <Image src={Instagram} alt="instagram" className="w-6 h-6" />
                <Image src={Twitter} alt="twitter" className="w-6 h-6" />
            </div>
        </>
    );
}
