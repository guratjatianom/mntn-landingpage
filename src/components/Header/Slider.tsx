"use client";
import { Text } from "@/components/Common";
import { useState, useEffect } from "react";

export default function Slider() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("data-section"));
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPosition(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="hidden md:flex fixed top-[460px] left-[1200px] transform -translate-y-1/2 flex-row items-center justify-center text-white w-[77px] z-10"
      >
        <div className="flex items-center space-y-4">
          <div className="flex flex-col text-center mr-[15px] space-y-4">
            <Text size="h8" className="font-bold pt-[15px] pb-[15px]">
              Start
            </Text>
            {["01", "02", "03"].map((item, index) => (
              <Text
                key={index}
                size="h8"
                className={`font-bold pb-[20px] text-right ${
                  activeSection === item ? "opacity-100 font-extrabold" : "opacity-50"
                }`}
              >
                {item}
              </Text>
            ))}
          </div>
          <div className="relative h-[240px] w-[3px] bg-gray-300 opacity-100 ml-auto">
            <div
              className="absolute left-0 top-0 w-[3px] bg-white"
              style={{
                height: `${scrollPosition}%`,
              }}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex md:hidden fixed bottom-10 left-[300px] justify-center items-center z-10 text-white">
        <div className="flex flex-col text-center mr-[5px] space-y-4">
          <Text size="h8" className="font-bold">Start</Text>
          {["01", "02", "03"].map((item, index) => (
            <Text
              key={index}
              size="h8"
              className={`font-bold ${
                activeSection === item ? "opacity-100 font-extrabold" : "opacity-50"
              }`}
            >
              {item}
            </Text>
          ))}
        </div>
        <div className="relative w-[3px] h-[140px] bg-gray-300 opacity-100 ml-auto">
          <div
            className="absolute top-0 left-0 w-[3px] bg-white"
            style={{
              width: `${scrollPosition}%`,
            }}
          />
        </div>
      </div> */}
    </>
  );
}
