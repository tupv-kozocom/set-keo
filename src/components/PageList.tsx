import React from 'react';
import Link from 'next/link';
import FeaturedList from '@/components/FeaturedList';
import SlideShow from '@/components/SlideShow';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {PageListProps} from "@/types/pageList.type";

export default function PageList({type, items, title, slides, titleLink}:PageListProps) {

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Banner SlideShow for restaurants - chiếm toàn bộ chiều rộng */}
        <div className="h-[300px] mb-6">
          <SlideShow slides={slides} fullWidth={true} />
        </div>
        
        {/* navigation */}
        <div className="mb-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Trang chủ</Link>
          <span className="mx-2">{'>'}</span>
          <span className="font-medium text-primary">{titleLink || "Danh sách hot"}</span>
        </div>
        
        {/* Restaurant grid */}
        <FeaturedList type={type} items={items} title={title}/>

        {/* Pagination use shadcn/ui component */}
        <div className="flex justify-center mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="border border-gray-200 bg-white hover:bg-gray-100" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="border border-gray-200 bg-white hover:bg-gray-100">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className="bg-primary text-white hover:bg-primary/90 border-primary">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="border border-gray-200 bg-white hover:bg-gray-100">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis className="border border-gray-200 bg-white" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="border border-gray-200 bg-white hover:bg-gray-100">8</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="border border-gray-200 bg-white hover:bg-gray-100" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </main>
  );
} 