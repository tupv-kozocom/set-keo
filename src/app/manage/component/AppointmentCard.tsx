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
    <div className="bg-white rounded-lg p-4 flex gap-4 items-center items-stretch">
      {/* Hình ảnh */}
      <Image
        src={image}
        width={156}
        height={156}
        alt={title}
        layout="fixed"
        className="h-[156px] object-cover rounded-md"
      />

      {/* Nội dung */}
      <div className="flex flex-1 justify-between flex-col items-stretch">
        <div className="flex justify-between">
          <div className="w-[90%]">
            <h3 className="font-medium line-clamp-2">{title}</h3>
            <p className="text-sm mt-3">Số người đăng ký tham gia: 4/10</p>
          </div>

          <Checkbox name="check-active" id="check-active" className="w-[20px] h-[20px]" />
        </div>

        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-3">
            <div className="flex items-end gap-2 text-primary font-medium bg-soft p-2 rounded-lg">
              <Image src="/calendar.svg" width={16} height={16} alt="Calender" />
              <span className="text-sm leading-none">{date}</span>
            </div>
            <div className="flex items-end gap-2 bg-gray-100 p-2 rounded-lg">
              <Image src="/coin.svg" width={16} height={16} alt="Coin" />
              <span className="text-sm leading-none text-gray-600">
                Chi phí dự kiến:
                <span>
                  <span className="text-green-600 font-semibold"> {price}</span>/người
                </span>
              </span>
            </div>
          </div>

          <Button variant="ghost" className="text-sm text-primary cursor-pointer">
            Lấy mã kèo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
