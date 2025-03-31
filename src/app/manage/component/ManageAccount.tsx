import ContentWrapper from '@/components/ContentWrapper';
import DatePicker from '@/components/Form/DatePicker';
import CustomRadioGroup from '@/components/Form/CustomRadioGroup';
import Select from '@/components/Form/Select';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Input from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ManageAccount = () => {
  const [gender, setGender] = useState('male');

  return (
    <>
      <ContentWrapper
        title="Thông tin cá nhân"
        actions={
          <Button
            variant="outline"
            className="bg-transparent hover:bg-soft border-primary text-primary cursor-pointer leading-[0] rounded-[10px] p-4"
          >
            Đổi mật khẩu
          </Button>
        }
      >
        <div className="space-y-6">
          {/* Giới tính */}
          <CustomRadioGroup
            className="flex-row my-6"
            options={[
              { value: 'male', label: 'Nam' },
              { value: 'female', label: 'Nữ' },
              { value: 'other', label: 'Khác' },
            ]}
            selectedValue={gender}
            onChange={setGender}
          />

          {/* Họ và Tên */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="last-name">Họ</Label>
              <Input
                name="last-name"
                type="text"
                id="last-name"
                className="mt-4 focus:outline-primary"
                placeholder="Nhập thông tin"
              />
            </div>
            <div>
              <Label htmlFor="first-name">Tên</Label>
              <Input
                name="name"
                type="text"
                id="first-name"
                className="mt-4 focus:outline-primary"
                placeholder="Nhập thông tin"
              />
            </div>
          </div>

          {/* Tỉnh/Thành phố và Quận/Huyện */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="province">Tỉnh/Thành phố</Label>
              <Select
                id="province"
                name="province"
                className="mt-4 focus:outline-primary"
                data={[
                  { value: 'hanoi', label: 'Hà Nội' },
                  { value: 'hcm', label: 'TP. Hồ Chí Minh' },
                ]}
              />
            </div>
            <div>
              <Label htmlFor="district">Quận/Huyện</Label>
              <Select
                id="district"
                name="district"
                className="mt-4 focus:outline-primary"
                data={[
                  { value: 'quan1', label: 'Quận 1' },
                  { value: 'quan2', label: 'Quận 2' },
                ]}
              />
            </div>
          </div>

          {/* Số điện thoại và Email */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone">Số điện thoại</Label>
              <Input
                name="phone"
                type="tel"
                id="phone"
                className="mt-4 focus:outline-primary"
                placeholder="Nhập thông tin"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                className="mt-4 focus:outline-primary"
                placeholder="Nhập thông tin"
              />
            </div>
          </div>

          {/* Ngày sinh */}
          <div className="flex flex-col">
            <Label htmlFor="dob">Ngày sinh</Label>
            <DatePicker id="dob" placeholder="Chọn" className="mt-4 focus:outline-primary" />
          </div>

          {/* Nút lưu */}
          <div className="flex justify-start">
            <Button className="bg-primary text-white px-10 py-2 rounded-[10px] cursor-pointer">LƯU</Button>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default ManageAccount;
