import React from "react";
import { Text } from "@/components/Common";

export default function Footer() {
    return (
        <div className="w-full flex justify-center items-center px-[150px] ">
            <div>
                <div className="flex h-[24px] w-[108px]">
                    <Text size="h3" className="text-white">MNTN</Text>
                </div>
                <div>
                    <Text size="h6">
                        Get out there & discover your next <br /> slope, mountain & destination!
                    </Text>
                </div>
            </div>
        </div>
    )
}