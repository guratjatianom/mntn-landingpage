import React from "react";
import Image from "next/image";
import Rectangle from "@/assets/Image/rectangle.svg";
import Right from "@/assets/Image/arrow_right.svg";
import { DataCard } from "@/components/Common/Card/DataCard";
import { Text } from "@/components/Common";

export default function Card() {
  return (
    <div className="pt-[900px] md:pt-[1400px]">
      {DataCard.slice(0, 3).map((content, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 md:gap-12 md:pb-[200px] md:px-12 pb-[30px] px-6"
        >
          {index % 2 === 0 ? (
            <>
              <div className="relative col-span-1 order-2 md:order-none">
                <div className="relative z-10 pt-10 sm:pt-5">
                  <Text
                    size="h1"
                    className="absolute text-[100px] md:text-[180px] leading-none text-white opacity-10 -top-0 md:-top-20 -left-35 md:-left-10"
                  >
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </Text>
                  <div className="pl-4 md:pl-8">
                    <div className="flex pb-4 md:pb-7">
                      <Image src={Rectangle} alt="rectangle" />
                      <Text
                        size="h6"
                        className="font-bold uppercase pl-3 md:pl-6 text-[#FBD784] tracking-wider"
                      >
                        {content.subtitle}
                      </Text>
                    </div>
                    <Text size="h2" className="text-white pb-4 md:pb-7 sm:text-xl">
                      {content.title}
                    </Text>
                    <Text size="h6" className="font-semibold text-white text-sm sm:text-base">
                      {content.paragraph}
                    </Text>
                    <div className="flex gap-4 cursor-pointer mt-4 md:mt-7">
                      <Text size="h6" className="font-semibold text-[#FBD784] text-sm sm:text-base">
                        Read More
                      </Text>
                      <Image src={Right} alt="arrow right" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative col-span-1 order-1 md:order-none flex justify-center items-center">
                <Image
                  src={content.image}
                  alt={content.title}
                  width={150}
                  height={200}
                  className="md:w-[360px] md:h-[500px] object-cover"
                />
              </div>
            </>
          ) : (
            <>
              <div className="relative col-span-1 order-1 md:order-none flex justify-center items-center">
                <Image
                  src={content.image}
                  alt={content.title}
                  width={150}
                  height={200}
                  className="md:w-[360px] md:h-[500px] object-cover"
                />
              </div>
              <div className="relative col-span-1 order-2 md:order-none">
                <div className="relative z-10 pt-10 sm:pt-5 sm:pl-4">
                  <Text
                    size="h1"
                    className="absolute text-[100px] md:text-[180px] leading-none text-white font-bold opacity-10 -top-0 md:-top-20 -left-35 md:-left-10"
                  >
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </Text>
                  <div className="pl-4 md:pl-8">
                    <div className="flex pb-4 md:pb-7">
                      <Image src={Rectangle} alt="rectangle" />
                      <Text
                        size="h6"
                        className="font-bold uppercase pl-3 md:pl-6 text-[#FBD784] tracking-wider"
                      >
                        {content.subtitle}
                      </Text>
                    </div>
                    <Text size="h2" className="text-white pb-4 md:pb-7 sm:text-xl">
                      {content.title}
                    </Text>
                    <Text size="h6" className="font-semibold text-white text-sm sm:text-base">
                      {content.paragraph}
                    </Text>
                    <div className="flex gap-4 cursor-pointer mt-4 md:mt-7">
                      <Text size="h6" className="font-semibold text-[#FBD784] text-sm sm:text-base">
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
