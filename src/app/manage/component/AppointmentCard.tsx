import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import Checkbox from '@/components/Form/Checkbox';

interface AppointmentCardProps {
  image: string;
  title: string;
  date: string;
  price: string;
}

const AppointmentCard = ({ image, title, date, price }: AppointmentCardProps) => {
  return (
    <div className="relative bg-white rounded-lg sm:p-4 flex flex-col sm:flex-row gap-4 items-stretch">
      {/* Hình ảnh */}
      <Image
        src={image}
        width={156}
        height={156}
        alt={title}
        className="w-full sm:w-[156px] h-[200px] sm:h-[156px] object-cover rounded-md"
      />

      {/* Nội dung */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between items-start gap-2">
          <div className="w-full sm:w-[90%]">
            <h3 className="font-medium line-clamp-2">{title}</h3>
            <p className="text-sm mt-2 sm:mt-3">Số người đăng ký tham gia: 4/10</p>
          </div>

          <Checkbox
            name="check-active"
            id="check-active"
            className="absolute sm:relative top-8 right-8 sm:top-0 w-5 h-5 shrink-0"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start sm:items-end mt-4 sm:mt-3 gap-3 sm:gap-0">
          <div className="flex flex-wrap md:justify-start justify-center gap-3">
            <div className="flex items-end gap-2 text-primary font-medium bg-soft px-3 py-2 rounded-lg">
              <Image src="/calendar.svg" width={16} height={16} alt="Calender" />
              <span className="text-sm leading-none">{date}</span>
            </div>
            <div className="flex items-end bg-gray-100 px-3 py-2 rounded-lg text-sm leading-none">
              <Image src="/coin.svg" width={16} height={16} alt="Coin" />
              <span className="md:block hidden text-sm leading-none ml-1">Chi phí dự kiến:</span>
              <span className="text-green leading-none font-semibold ml-1"> {price}</span>/người
            </div>
          </div>

          <Button variant="ghost" className="text-sm text-primary cursor-pointer w-full sm:w-auto">
            Lấy mã kèo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
