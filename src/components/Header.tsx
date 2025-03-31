"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white w-full">
      {/* Main header with logo, search and auth buttons */}
      <div className="max-w-7xl mx-auto px-5 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-br from-[#ffff42] to-[#ed2409] bg-clip-text">
                Setkeo
              </Link>
            </div>
            
            {/* Search bar */}
            <div className="relative hidden md:block">
              <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 border border-transparent focus-within:border-primary">
                <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="ml-2 bg-transparent border-none focus:outline-none text-sm w-40 sm:w-52 text-gray-700 placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4 hidden lg:flex">
            <Link 
              href="/register" 
              className="px-3 py-1 sm:px-4 sm:py-1.5 text-sm sm:text-base text-gray-700 hover:text-primary transition-colors duration-300 "
            >
              Đăng ký
            </Link>
            
            {/* Divider line */}
            <div className="h-5 w-px bg-gray-300"></div>
            
            <Link 
              href="/login" 
              className="px-3 py-1 sm:px-4 sm:py-1.5 text-sm sm:text-base border border-transparent bg-gradient-to-tr from-[#ffff42] to-[#ed2409] rounded-full relative group transition-color duration-300"
            >
              <span className="absolute inset-0 bg-white rounded-full transition-all duration-300 border border-transparent group-hover:bg-transparent"></span>
              <span className="relative font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#ffff42] to-[#ed2409] group-hover:text-white">
                Đăng nhập
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation menu bar - a row below the header */}
      <div className="border-t border-gray-200 hidden lg:block py-2">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <nav className="flex justify-start items-center space-x-4 md:space-x-6 lg:space-x-8 h-10 sm:h-12 overflow-x-auto text-sm md:text-base">
            <Link 
              href="/" 
              className={`flex items-center whitespace-nowrap ${isActive('/') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary transition-colors duration-300 '}`}
            >
              <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Nơi bạn muốn đến
            </Link>
            <Link 
              href="/all" 
              className={`whitespace-nowrap ${isActive('/all') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary transition-colors duration-300 '} `}
            >
              Tất cả
            </Link> 
            <Link 
              href="/restaurants" 
              className={`whitespace-nowrap ${isActive('/restaurants') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary transition-colors duration-300 '}`}
            >
              Địa điểm ăn uống
            </Link>
            <Link 
              href="/entertainment" 
              className={`whitespace-nowrap ${isActive('/entertainment') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary transition-colors duration-300 '}`}
            >
              Địa điểm vui chơi
            </Link>
            <Link 
              href="/check-in" 
              className={`whitespace-nowrap ${isActive('/check-in') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary transition-colors duration-300 '}`}
            >
              Check in khám phá
            </Link>
            <div className="flex items-center">
              <div className="h-5 w-px bg-gray-300 mr-4"></div>
              <Link href="/group" className="whitespace-nowrap px-3 py-1 md:px-4 md:py-1.5 text-white rounded-full text-sm md:text-base bg-gradient-to-br from-[#ffff42] to-[#ed2409] hover:opacity-90">
                Lên kèo hội nhóm
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors duration-300  hover:bg-gray-100'}`}
            >
              Nơi bạn muốn đến
            </Link>
            <Link
              href="/all"
              className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/all') ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors duration-300  hover:bg-gray-100'}`}
            >
              Tất cả
            </Link>
            <Link
              href="/restaurants"
              className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/restaurants') ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors duration-300  hover:bg-gray-100'}`}
            >
              Địa điểm ăn uống
            </Link>
            <Link
              href="/entertainment"
              className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/entertainment') ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors duration-300  hover:bg-gray-100'}`}
            >
              Địa điểm vui chơi
            </Link>
            <Link
              href="/check-in"
              className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/check-in') ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors duration-300  hover:bg-gray-100'}`}
            >
              Check in kham phá
            </Link>
            <Link
              href="/group"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300  hover:bg-gray-100"
            >
              Lên kèo hội nhóm
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300  hover:bg-gray-100"
            >
              Đăng ký
            </Link>
            <div className="border-t border-gray-200 my-1"></div>
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-sm font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#ffff42] to-[#ed2409] hover:text-primary transition-colors duration-300  hover:bg-gray-100"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
