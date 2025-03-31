"use client";

import Link from "next/link";
import FeaturedList from "@/components/FeaturedList";
import { FeaturedListProps } from "@/types/featuredItem.type";

const PopularLocations = ({ type, items, title }: FeaturedListProps) => {
  return (
    <section
      className=" px-4 max-w-7xl mx-auto"
    >
      <div className=" mb-8 text-center">
        <Link
          href="/locations"
          className="text-orange-500 inline-flex items-center gap-1 relative pb-1 group border-b border-dashed border-orange-500 hover:text-orange-700 hover:border-orange-700 transition-colors duration-150"
        >
              Khám phá thêm
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>

      <div className="lg:flex block">
        <div className="py-8 flex-col items-left mb-8 gap-4 hidden lg:flex">

          <h2
            className="text-3xl font-bold"
          >
            Địa điểm checkin nổi bật
          </h2>

          <div className="flex gap-2">
            <Link
              href="#"
              className="px-4 py-2 border border-primary text-primary rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-150 flex items-center gap-1"
            >
              <span className="font-bold">Khám phá ngay</span>
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
        </div>

        <div className="">
          <FeaturedList type={type} items={items} title={title}/>
        </div>
      </div>

    </section>
  );
};

export default PopularLocations;
