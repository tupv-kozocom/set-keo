"use client";

import {Carousel, type CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {previewImages} from "@/app/posts/[id]/mock-data";
import Image from "next/image";
import {useEffect, useState} from "react";

function PostCarousel() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

    }, [api]);

    return (
        <>
            <Carousel
                setApi={setApi}
                className="relative"
            >
                <CarouselContent className="-ml-0">
                    {previewImages.map((image, index) => (
                        <CarouselItem key={index} className="relative h-[400px] pl-0">
                            <Image
                                fill
                                src={image.image}
                                alt={"Temp"}
                                className="object-cover rounded-lg"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {Array.from({length: count}).map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === current ? "bg-orange-500" : "bg-gray-400"}`}
                            onClick={() => {
                                api?.scrollTo(index)
                                setCurrent(index)
                            }}
                        />
                    ))}
                </div>
            </Carousel>
            <div className="flex justify-between items-center mt-2 space-x-2 md:space-x-0">
                {previewImages.map((image, index) => (
                    <div key={index} className="relative h-[100px] w-[200px]">
                        <Image
                            src={image.image}
                            alt={"Temp"}
                            fill
                            className={`rounded-lg ${index === current ? "border-3 border-orange-500" : "border-0"}`}
                            onClick={() => {
                                api?.scrollTo(index)
                                setCurrent(index)
                            }}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default PostCarousel;