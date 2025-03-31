'use client';
import ContentWrapper from '@/components/ContentWrapper';
import RadioGroup from '@/components/Form/RadioGroup';
import { useState } from 'react';
import CreateForm from './component/CreateForm';
import Image from 'next/image';
import Link from 'next/link';
import ROUTES from '@/constants/routeName';

export default function Page() {
  const [postStatus, setPostStatus] = useState('public');

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 sm:py-8">
      <div
        className="flex items-center w-full h-[160px] sm:h-[263px] bg-cover pl-12 bg-center rounded-[10px]"
        style={{ backgroundImage: "url('/images/beach2.png')" }}
      >
        <h2 className="text-white text-4xl font-bold max-w-[300px]">Lên lịch gặp mặt hội nhóm</h2>
      </div>

      {/* Breadcrumb */}
      <div className="py-4 flex items-center space-x-2 text-sm">
        <Link href={ROUTES.HOME}>Trang chủ</Link>
        <Image src="/arrow-right.svg" width={6} height={6} alt="arrow-right" />
        <Link href={ROUTES.CREATE} className="text-primary">
          Tạo cuộc hẹn nhóm
        </Link>
      </div>

      <ContentWrapper
        className="sm:p-16 max-w-4xl m-auto sm:mt-8"
        title="Tạo cuộc hẹn"
        titleSize={30}
        actions={
          <div className="flex flex-col">
            <RadioGroup
              name="gender"
              options={[
                { value: 'public', label: 'Công khai' },
                { value: 'private', label: 'Riêng tư' },
              ]}
              selectedValue={postStatus}
              onChange={setPostStatus}
            />
          </div>
        }
      >
        <CreateForm />
      </ContentWrapper>
    </div>
  );
}
