import React, { useState } from "react";
import { Text } from '@/components/Common';

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = ["01", "02", "03"];
    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="absolute right-[100px] top-[326px] w-[77px] h-[190px] flex flex-col justify-between items-center">
            <Text size="h7" className="text-white">Start</Text>
            <div className="flex flex-col items-center gap-8">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className="cursor-pointer"
                    >
                        <Text
                            size="h7"
                            className={`text-white ${currentSlide === index ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}
                        >
                            {slide}
                        </Text>
                    </div>
                ))}
            </div>
        </div>
    );
}
