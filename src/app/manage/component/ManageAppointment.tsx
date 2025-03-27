import Link from 'next/link';
import AppointmentCard from './AppointmentCard';
import EditIcon from '@/assets/icons/EditIcon';
import DeleteIcon from '@/assets/icons/DeleteIcon';
import ContentWrapper from '../../../components/ContentWrapper';

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
      <ContentWrapper
        title="Lịch hẹn"
        actions={
          <>
            <Link href="#" className="flex gap-2 items-start group">
              <EditIcon className="group-hover:text-primary text-text-sub transition duration-200" />
              <span className="group-hover:text-text-heading group-hover:font-semibold text-sm">Sửa</span>
            </Link>

            <div className="h-[23px] w-[1px] bg-cloud-gray"></div>
            <Link href="#" className="flex gap-2 items-start group">
              <DeleteIcon className="group-hover:text-primary text-text-sub transition duration-200" />
              <span className="group-hover:text-text-heading group-hover:font-semibold text-sm">Xóa</span>
            </Link>
          </>
        }
      >
        <div className="space-y-6">
          {appointments.map((item, index) => (
            <AppointmentCard key={index} {...item} />
          ))}
        </div>
      </ContentWrapper>
    </>
  );
};

export default ManageAppointment;
