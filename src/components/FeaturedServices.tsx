"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      title: "Trải nghiệm bay dù lượn Đà Bắc, Hà Nội",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, mattis nisl mauris leo nisl.",
      price: "1,290,000",
      image: "/images/paragliding.jpg",
    },
    {
      id: 2,
      title: "Trải nghiệm cắm trại",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, mattis nisl mauris leo nisl.",
      price: "1,290,000",
      image: "/images/camping.jpg",
    },
    {
      id: 3,
      title: "Trải nghiệm du lịch biển Đà Nẵng",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, mattis nisl mauris leo nisl.",
      price: "1,290,000",
      image: "/images/beach.jpg",
    },
    {
      id: 4,
      title: "Food tour Sài Gòn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, mattis nisl mauris leo nisl.",
      price: "1,290,000",
      image: "/images/food-tour.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(0, services.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Các dịch vụ nổi bật</h2>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {services.map((service) => (
              <div key={service.id} className="min-w-[300px] flex-shrink-0">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-medium">
                        Chỉ từ {service.price} đ
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
            aria-label="Previous services"
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

        {currentIndex < services.length - 3 && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors -mr-4"
            aria-label="Next services"
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

export default FeaturedServices;
