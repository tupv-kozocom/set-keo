"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PopularLocations = () => {
  const locations = [
    {
      id: 1,
      title: "Trải nghiệm bay dù lượn Đồi Sơ, Hà Nội",
      image: "/images/location1.jpg",
    },
    {
      id: 2,
      title: "Trải nghiệm bay dù lượn Đồi Sơ, Hà Nội",
      image: "/images/location2.jpg",
    },
    {
      id: 3,
      title: "Trải nghiệm bay dù lượn Đồi Sơ, Hà Nội",
      image: "/images/location3.jpg",
    },
    {
      id: 4,
      title: "Trải nghiệm bay dù lượn Đồi Sơ, Hà Nội",
      image: "/images/location4.jpg",
    },
    {
      id: 5,
      title: "Trải nghiệm bay dù lượn Đồi Sơ, Hà Nội",
      image: "/images/location5.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(0, locations.length - 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const renderLocations = () => {
    return locations.map((location) => (
      <div
        key={location.id}
        className="min-w-[280px] flex-shrink-0"
        data-locator-target={`location-card-${location.id}`}
      >
        <div className="relative h-[400px] rounded-lg overflow-hidden group">
          <Image
            src={location.image}
            alt={location.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            data-locator-target={`location-image-${location.id}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3
                className="font-semibold text-lg mb-2"
                data-locator-target={`location-title-${location.id}`}
              >
                {location.title}
              </h3>
              <Link
                href="#"
                className="inline-flex items-center text-sm text-white hover:underline"
                data-locator-target={`location-link-${location.id}`}
              >
                Xem chi tiết
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section
      className="py-12 px-4 max-w-7xl mx-auto"
      data-locator-target="popular-locations-section"
    >
      <div
        className="flex justify-between items-center mb-8"
        data-locator-target="popular-locations-header"
      >
        <h2
          className="text-2xl font-bold"
          data-locator-target="popular-locations-title"
        >
          Địa điểm checkin nổi bật
        </h2>
        <Link
          href="/locations"
          className="text-primary hover:underline flex items-center gap-1"
          data-locator-target="explore-more-link"
        >
          Khám phá thêm
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>

      <div className="relative" data-locator-target="locations-container">
        <div className="overflow-hidden">
          <div
            className="flex gap-6"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
              transition: "transform 300ms ease-in-out",
            }}
            data-locator-target="locations-grid"
          >
            {renderLocations()}
          </div>
        </div>

        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors -ml-4"
            aria-label="Previous locations"
            data-locator-target="prev-button"
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

        {currentIndex < locations.length - 4 && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors -mr-4"
            aria-label="Next locations"
            data-locator-target="next-button"
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

export default PopularLocations;
