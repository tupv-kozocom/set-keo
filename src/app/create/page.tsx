'use client';
import ContentWrapper from '@/components/ContentWrapper';
import CustomRadioGroup from '@/components/Form/CustomRadioGroup';
import { useState } from 'react';
import CreateForm from './component/CreateForm';
import ROUTES from '@/constants/routeName';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';

export default function Page() {
  const [postStatus, setPostStatus] = useState('public');
  const breadCrumbList = [
    { label: 'Trang chủ', href: ROUTES.HOME },
    { label: 'Tạo cuộc hẹn nhóm', isCurrent: true },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 sm:py-8">
      <div
        className="flex items-center w-full h-[160px] sm:h-[263px] bg-cover pl-12 bg-center rounded-[10px]"
        style={{ backgroundImage: "url('/images/beach2.png')" }}
      >
        <h2 className="text-white text-4xl font-bold max-w-[300px]">Lên lịch gặp mặt hội nhóm</h2>
      </div>

      {/* Breadcrumb */}
      <CustomBreadcrumb items={breadCrumbList} />

      <ContentWrapper
        className="sm:p-16 max-w-4xl m-auto sm:mt-8"
        title="Tạo cuộc hẹn"
        titleSize={30}
        actions={
          <CustomRadioGroup
            className="flex-row"
            options={[
              { value: 'public', label: 'Công khai' },
              { value: 'private', label: 'Riêng tư' },
            ]}
            selectedValue={postStatus}
            onChange={setPostStatus}
          />
        }
      >
        <CreateForm />
      </ContentWrapper>
    </div>
  );
}
