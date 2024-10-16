import React from "react";
import { Text } from "@/components/Common";

export default function Footer() {
    return (
        <div className="relative w-full px-[20px] py-[30px] md:py-[50px] md:px-[100px] z-10">
            <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="mb-[30px] md:mb-0">
                    <div className="flex h-[24px] w-[108px] mb-[24px]">
                        <Text size="h3" className="text-white">MNTN</Text>
                    </div>
                    <div className="text-white">
                        <Text size="h6" className="text-sm md:text-base">
                            Get out there & discover your next <br className="hidden md:block" /> slope, mountain & destination!
                        </Text>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-[30px] md:space-y-0 md:space-x-[50px]">
                    <div>
                        <div className="text-[#FBD784] mb-[16px]">
                            <Text size="h4" className="text-lg md:text-xl">More on The Blog</Text>
                        </div>
                        <div className="text-white">
                            <Text size="h6" className="pb-[16px] text-sm md:text-base">About MNTN</Text>
                            <Text size="h6" className="pb-[16px] text-sm md:text-base">Contributors & Writers</Text>
                            <Text size="h6" className="pb-[16px] text-sm md:text-base">Write For Us</Text>
                            <Text size="h6" className="pb-[16px] text-sm md:text-base">Contact Us</Text>
                            <Text size="h6" className="pb-[16px] text-sm md:text-base">Privacy Policy</Text>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#FBD784] mb-[16px]">
                            <Text size="h4" className="text-lg md:text-xl">More on MNTN</Text>
                        </div>
                        <div className="text-white">
                            <Text size="h6" className="pb-[16px] text-sm md:text-base">The Team</Text>
                            <Text size="h6" className="pb-[16px] text-sm md:text-base">Jobs</Text>
                            <Text size="h6" className="pb-[16px] text-sm md:text-base">Press</Text>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 text-white pt-[50px] md:pt-[0px] text-sm md:text-base text-center md:text-left">
                <Text size="h6">Copyright 2023 MNTN, Inc. Terms & Privacy</Text>
            </div>
        </div>
    );
}
