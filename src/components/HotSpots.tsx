"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HotSpots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const spots = [
    {
      id: 1,
      title: "Bánh mì nguyên hương cổ truyền thống Pháp",
      address: "67 Lê Lợi, Đà Nẵng",
      price: "30,000",
      image: "/images/banh-mi.jpg",
    },
    {
      id: 2,
      title: "Quán nhậu tự do",
      address: "45 Lê Lợi, Đà Nẵng",
      price: "100,000",
      image: "/images/quan-nhau.jpg",
    },
    {
      id: 3,
      title: "Beefsteak Núi Pháp - chỗ buồn tối hẹn hò lý tưởng",
      address: "89 Đường Trưng, Đà Nẵng",
      price: "300,000",
      image: "/images/beefsteak.jpg",
    },
    {
      id: 4,
      title: "Hương vị vùng đồn của món Huế - Kí ức không thể phai nhòa",
      address: "34 Lê Lợi, Huế",
      price: "50,000",
      image: "/images/mon-hue.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(0, spots.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Địa điểm ăn uống HOT gần đây</h2>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {spots.map((spot) => (
              <div key={spot.id} className="min-w-[300px] flex-shrink-0">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48">
                    <Image
                      src={spot.image}
                      alt={spot.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{spot.title}</h3>
                    <div className="flex items-start gap-2 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 mt-1 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span className="text-gray-600 text-sm">
                        {spot.address}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-medium">
                        Chỉ từ {spot.price} đ
                      </span>
                      <Link
                        href="#"
                        className="px-4 py-2 bg-primary text-white rounded-full text-sm hover:bg-primary-dark transition-colors"
                      >
                        Xét kèo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors -ml-4"
            aria-label="Previous spots"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}

        {currentIndex < spots.length - 3 && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors -mr-4"
            aria-label="Next spots"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default HotSpots;
