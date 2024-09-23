"use client";
import React from "react";
import { PaddingContainer, Text } from '@/components/Common';

export default function Navbar() {
    return (
        <div>
            <PaddingContainer>
                <div className="flex w-[1150px] justify-between text-center items-center mt-[40px]">
                    <div className="flex h-[24px] w-[108px] text-center items-center">
                        <Text size="h3">
                            MNTN
                        </Text>
                    </div>
                    <div className="flex gap-10 text-center items-center">
                        <Text size="h5">
                            Equipment
                        </Text>
                        <Text size="h5">
                            About Us
                        </Text>
                        <Text size="h5">
                            Blog
                        </Text>
                    </div>
                    <div className="flex">
                        <Text size="h6">
                            Account
                        </Text>
                    </div>
                </div>
            </PaddingContainer>
        </div>
    )
}