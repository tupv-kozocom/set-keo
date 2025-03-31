"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import {
    FeaturedListProps,
} from "@/types/featuredItem.type";
import ROUTES from '@/constants/routeName';

export default function FeaturedList({ type, items, title }: FeaturedListProps) {
  // Map các loại carousel sang tiêu đề

  const hasCheckin = type === 'checkin';
  return (
    <section className="py-12 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 ">
      <h2 className={`text-3xl font-bold mb-8  ${hasCheckin && 'lg:hidden'}`}>{title || 'Dịch vụ'}</h2>
      <Carousel
        opts={{
          align: 'start',
          loop: false,
        }}
        className="relative"
      >
        <CarouselContent className={`-ml-7 md:px-6 ${hasCheckin && 'lg:-ml-2 md:px-0'}`}>
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className={`pl-7 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 ${hasCheckin && 'lg:pl-2'}`}
            >
              <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col p-2">
                {/* Image */}
                <Link
                  href={`${ROUTES.POST}/${item.id}`}
                  className={`rounded-lg relative h-48 w-full overflow-hidden ${hasCheckin && 'h-70'}`}
                >
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </Link>

                <div className="py-4 flex justify-between flex-col grow">
                  <Link
                    href={`${ROUTES.POST}/${item.id}`}
                    className={`font-semibold text-base mb-3 grow line-clamp-2 ${hasCheckin && 'text-center'} `}
                  >
                    {item.title}
                  </Link>

                  {/* Don't show detail in hot checkin list component*/}
                  {!hasCheckin && (
                    <>
                      <div className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {item?.address && (
                          <svg
                            className="w-5 h-5 mr-2 inline-block"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        )}
                        <span>{item?.description || item?.address || ''}</span>
                      </div>

                      <div className="flex gap-2 items-center justify-between">
                        <div className="flex flex-col gap-1">
                          <span className="text-gray-600 font-medium text-[0.95rem]">
                            Chi phí từ:
                            <br /> {item.price} đ
                          </span>
                          {item.author && <span className="text-gray-400 text-sm">Người đăng: {item.author}</span>}
                        </div>
                        <div className="text-center">
                          <Link
                            href={ROUTES.CREATE}
                            className="px-4 py-2 border border-primary text-primary rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                          >
                            <span className="font-bold">Sét kèo</span>
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className=" -translate-y-1/2 bg-white rounded-full shadow-lg hover:bg-white/70 transition-colors
                absolute left-0 h-8 w-8 rounded-full border-0 text-black hover:scale-110 hover:shadow-xl transition-all duration-300"
        />
        <CarouselNext
          className="-translate-y-1/2 bg-white/80 rounded-full shadow-lg hover:bg-white/70 transition-colors
                absolute right-0 h-8 w-8 rounded-full border-0 text-black hover:scale-110 hover:shadow-xl transition-all duration-300"
        />
      </Carousel>
    </section>
  );
};

 