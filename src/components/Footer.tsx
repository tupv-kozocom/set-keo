import ROUTES from '@/constants/routeName';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center space-y-6 sm:space-y-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            href={ROUTES.HOME}
            className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ffff42] to-[#ed2409] "
          >
            Setkeo
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0">
          <Link href={ROUTES.RESTAURANTS} className="text-gray-700 px-3 py-1.5 sm:py-0">
            Địa điểm ăn uống
          </Link>
          <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
          <Link href={ROUTES.ENTERTAINMENT} className="text-gray-700 px-3 py-1.5 sm:py-0">
            Địa điểm vui chơi
          </Link>
          <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
          <Link href={ROUTES.CHECK_IN} className="text-gray-700 px-3 py-1.5 sm:py-0">
            Check in khám phá
          </Link>
        </div>

        {/* Contact Info */}
        <div className="text-center text-sm text-[#bababa]">
          <p className="mb-2">
            Chịu trách nhiệm nội dung SetkeoTeam • Địa chỉ: 373-375 Trần Hưng Đạo, Phường 2, Quận 5, HCM • Số điện
            thoại: 1900 272736
          </p>
          <p>© 2022 SetkeoTeam. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
