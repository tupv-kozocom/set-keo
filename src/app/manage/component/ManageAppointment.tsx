import Link from 'next/link';
import AppointmentCard from './AppointmentCard';
import EditIcon from '@/assets/icons/EditIcon';
import DeleteIcon from '@/assets/icons/DeleteIcon';

const ManageAppointment = () => {
  const appointments = [
    {
      image: '/images/food-tour.jpg',
      title:
        'Tour 4 Đảo Phú QuốcTour 4 Đảo Phú Quốc Bao Gồm Công Viên Nước Aquatopia và Trải Nghiệm Đi Cáp Treo Vượt Biển',
      date: '20/04/2022 - 8h30',
      price: '1,016,500đ',
    },
    {
      image: '/images/food-tour.jpg',
      title: 'Tour 4 Đảo Phú Quốc Bao Gồm Công Viên Nước Aquatopia ',
      date: '20/04/2022 - 8h30',
      price: '1,016,500đ',
    },
    {
      image: '/images/food-tour.jpg',
      title: 'Khám phá ẩm thực Huế giữa lòng thành phố biển Đà Nẵng',
      date: '20/04/2022 - 8h30',
      price: '1,016,500đ',
    },
  ];

  return (
    <>
      <div className="flex justify-between items-end">
        <h1 className="text-xl font-bold text-gray-800">Lịch hẹn</h1>
        <div className="flex gap-4 text-gray-500">
          <Link href="#" className="flex gap-2 items-start group">
            <EditIcon className="group-hover:text-primary transition duration-200" />
            <span className="group-hover:text-text-heading group-hover:font-semibold">Sửa</span>
          </Link>

          <div className="h-[23px] w-[1px] bg-[#F2F2F2]"></div>
          <Link href="#" className="flex gap-2 items-start group">
            <DeleteIcon className="group-hover:text-primary transition duration-200" />
            <span className="group-hover:text-text-heading group-hover:font-semibold">Xóa</span>
          </Link>
        </div>
      </div>
      <hr className="mt-6 border-[#F2F2F2]" />
      <div className="mt-4 space-y-4">
        {appointments.map((item, index) => (
          <AppointmentCard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default ManageAppointment;
