import React from "react";
import Image from "next/image";
import Rectangle from "@/assets/Image/rectangle.svg";
import Right from "@/assets/Image/arrow_right.svg";
import { DataCard } from "@/components/Common/Card/DataCard";
import { Text } from "@/components/Common";

export default function Card() {
  return (
    <div className="pt-[1400px]">
      {DataCard.slice(0, 3).map((content, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 pb-[200px] md:px-12"
        >
          {index % 2 === 0 ? (
            <>
              <div className="relative col-span-1">
                <div className="relative z-10 pt-10">
                  <Text
                    size="h1"
                    className="absolute text-[180px] leading-none text-white font-bold opacity-10 -top-10 -left-10"
                  >
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </Text>
                  <div className="pl-8">
                    <div className="flex pb-7">
                      <Image src={Rectangle} alt="rectangle" />
                      <Text
                        size="h6"
                        className="font-bold uppercase pl-6 text-[#FBD784] tracking-wider"
                      >
                        {content.subtitle}
                      </Text>
                    </div>
                    <Text size="h2" className="text-white pb-7">
                      {content.title}
                    </Text>
                    <Text size="h6" className="font-semibold text-white text-sm">
                      {content.paragraph}
                    </Text>
                    <div className="flex gap-4 cursor-pointer mt-7">
                      <Text size="h6" className="font-semibold text-[#FBD784] text-sm">
                        Read More
                      </Text>
                      <Image src={Right} alt="arrow right" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative col-span-1">
                <Image
                  src={content.image}
                  alt={content.title}
                  width={360}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </>
          ) : (
            <>
              <div className="relative col-span-1">
                <Image
                  src={content.image}
                  alt={content.title}
                  width={360}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="relative col-span-1">
                <div className="relative z-10 pt-10 pl-10">
                  <Text
                    size="h1"
                    className="absolute text-[180px] leading-none text-white font-bold opacity-10 -top-10 -left-10"
                  >
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </Text>
                  <div className="pl-8">
                    <div className="flex pb-7">
                      <Image src={Rectangle} alt="rectangle" />
                      <Text
                        size="h6"
                        className="font-bold uppercase pl-6 text-[#FBD784] tracking-wider"
                      >
                        {content.subtitle}
                      </Text>
                    </div>
                    <Text size="h2" className="text-white pb-7">
                      {content.title}
                    </Text>
                    <Text size="h6" className="font-semibold text-white text-sm">
                      {content.paragraph}
                    </Text>
                    <div className="flex gap-4 cursor-pointer mt-7">
                      <Text size="h6" className="font-semibold text-[#FBD784] text-sm">
                        Read More
                      </Text>
                      <Image src={Right} alt="arrow right" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
