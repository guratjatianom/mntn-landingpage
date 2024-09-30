import React from "react";
import { Text } from '@/components/Common';
import Instagram from "@/assets/Image/instagram.svg";
import Twitter from "@/assets/Image/twitter.svg";
import Image from "next/image";

export default function FollowUs() {
    return (
        <div className="flex flex-col text-center items-center absolute w-auto h-auto top-[380px] left-[60px]">
            <Text size="h7" className="text-center items-center transform rotate-90 text-white cursor-pointer">
                Follow us
            </Text>
            <div>
                <Image src={Instagram} alt="instagram" className="mt-14" />
                <Image src={Twitter} alt="twitter" className="mt-6" />
            </div>
        </div>
    );
}
