import ContentWrapper from '@/components/ContentWrapper';
import AppointmentCard from './AppointmentCard';
import { Button } from '@/components/ui/button';

const ManageInvitation = () => {
  const invitations = [
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
        title="Lời mời tham gia"
        actions={
          <>
            <Button
              variant="outline"
              className="bg-transparent hover:bg-soft border-primary text-primary cursor-pointer leading-[0] rounded-[10px] p-4"
            >
              Chấp nhận lời mời
            </Button>
          </>
        }
      >
        <div className="space-y-6">
          {invitations.map((item, index) => (
            <AppointmentCard key={index} {...item} />
          ))}
        </div>
      </ContentWrapper>
    </>
  );
};

export default ManageInvitation;
