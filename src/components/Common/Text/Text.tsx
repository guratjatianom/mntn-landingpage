import React from "react";
import { twMerge } from "tailwind-merge";
import { playfair_display, montserrat } from "@/app/fonts/fonts";

interface TextProps {
    children: React.ReactNode;
    className?: string;
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
}

const Text: React.FC<TextProps> = ({
    children,
    className = '',
    size = 'h1',
}) => {
    const sizeClasses = {
        h1: `text-[58px] leading-[100px] font-bold ${playfair_display.className}`,
        h2: `text-[46px] leading-[76.8px] font-bold ${playfair_display.className}`,
        h3: `text-[24px] leading-[38.4px] ${playfair_display.className}`,
        h4: `text-[24px] leading-[28.8px] ${montserrat.className}`,
        h5: `text-[18px] leading-[32px] ${montserrat.className}`,
        h6: `text-[18px] leading-[22.05px] ${montserrat.className}`,
        h7: `text-[18px] leading-[21.76px] ${montserrat.className}`,
    };

    const combinedClasses = twMerge(
        sizeClasses[size], 
        className
    );

    const Component = size as keyof JSX.IntrinsicElements;

    return <Component className={combinedClasses}>{children}</Component>;
}

export default Text;
