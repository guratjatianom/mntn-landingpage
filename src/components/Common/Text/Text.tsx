import React from "react";
import { twMerge } from "tailwind-merge";
import { playfair_display, montserrat } from "@/app/fonts/fonts";

interface TextProps {
    children: React.ReactNode;
    className?: string;
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8';
}

const Text: React.FC<TextProps> = ({
    children,
    className = '',
    size = 'h1',
}) => {
    const sizeClasses = {
        h1: `text-[36px] leading-[50px] md:text-[58px] md:leading-[100px] font-bold ${playfair_display.className}`,
        h2: `text-[28px] leading-[46px] md:text-[46px] md:leading-[76.8px] font-bold ${playfair_display.className}`,
        h3: `text-[20px] leading-[30px] md:text-[24px] md:leading-[38.4px] ${playfair_display.className}`,
        h4: `text-[20px] leading-[28px] md:text-[24px] md:leading-[32px] ${montserrat.className}`,
        h5: `text-[18px] leading-[26px] md:text-[24px] md:leading-[28.8px] ${montserrat.className}`,
        h6: `text-[16px] leading-[24px] md:text-[18px] md:leading-[32px] ${montserrat.className}`,
        h7: `text-[16px] leading-[22px] md:text-[18px] md:leading-[22.05px] ${montserrat.className}`,
        h8: `text-[14px] leading-[20px] md:text-[18px] md:leading-[21.76px] ${montserrat.className}`,
    };

    const combinedClasses = twMerge(
        sizeClasses[size], 
        className
    );

    const Component = size as keyof JSX.IntrinsicElements;

    return <Component className={combinedClasses}>{children}</Component>;
}

export default Text;
