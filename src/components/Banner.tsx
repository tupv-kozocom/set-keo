"use client";

import Image from "next/image";
import SlideShow from "./SlideShow";
import { Slide } from "@/types/slide.type";

const Banner = () => {
  const slides: Slide[] = [
    {
      id: 1,
      image: "/images/banner1.jpg",
      alt: "Beautiful lake with boats",
    },
    {
      id: 2,
      image: "/images/banner2.jpg",
      alt: "A girl is watching the scenery",
    },
    {
      id: 3,
      image: "/images/banner3.jpg",
      alt: "People enjoying outdoors",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 sm:px-6 md:px-14 lg:px-8 md:h-[500px] h-[250px] gap-4">
      {/* Left side - SlideShow Component */}
      <SlideShow slides={slides} />

      {/* Right side - Static Image */}
      <div className="hidden lg:block relative w-1/3 h-full rounded-2xl overflow-hidden">
        <Image
          src="/images/banner3.jpg"
          alt="Friends enjoying drinks"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
