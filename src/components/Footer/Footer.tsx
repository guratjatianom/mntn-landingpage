import React from "react";
import { Text } from "@/components/Common";

export default function Footer() {
    return (
        <div className="w-full  py-[50px] px-[150px]">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex h-[24px] w-[108px] mb-[24px]">
                        <Text size="h3" className="text-white">MNTN</Text>
                    </div>
                    <div className="text-white">
                        <Text size="h6">
                            Get out there & discover your next <br /> slope, mountain & destination!
                        </Text>
                    </div>
                    <div className="opacity-50 text-white pt-[122px]">
                        <Text size="h6">Copyright 2023 MNTN, Inc. Terms & Privacy</Text>
                    </div>
                </div>
                <div className="flex space-x-[70px]">
                    <div>
                        <div className="text-[#FBD784] mb-[16px]">
                            <Text size="h4">More on The Blog</Text>
                        </div>
                        <div className="text-white">
                            <Text size="h6" className="pb-[16px]">About MNTN</Text>
                            <Text size="h6" className="pb-[16px]">Contributors & Writers</Text>
                            <Text size="h6" className="pb-[16px]">Write For Us</Text>
                            <Text size="h6" className="pb-[16px]">Contact Us</Text>
                            <Text size="h6" className="pb-[16px]">Privacy Policy</Text>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#FBD784] mb-[16px]">
                            <Text size="h4">More on MNTN</Text>
                        </div>
                        <div className="text-white">
                            <Text size="h6" className="pb-[16px]">The Team</Text>
                            <Text size="h6" className="pb-[16px]">Jobs</Text>
                            <Text size="h6" className="pb-[16px]">Press</Text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
