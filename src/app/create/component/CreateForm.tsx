import DatePicker from '@/components/Form/DatePicker';
import Input from '@/components/ui/input';
import Image from 'next/image';
import React, { useState } from 'react';

const CreateForm = () => {
  const [emails, setEmails] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [email, setEmail] = useState('');

  // Thêm email
  const addEmail = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === 'Enter' && email.trim()) {
      e.preventDefault();

      if (!emails.includes(email.trim())) {
        setEmails([...emails, email.trim()]);
        setEmail('');
      }
    }
  };

  // Xóa email
  const removeEmail = (emailToRemove: string) => {
    setEmails(emails.filter((email) => email !== emailToRemove));
  };

  // Xử lý upload ảnh
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  return (
    <div className="">
      {/* Tiêu đề */}
      <Input
        name="title"
        type="text"
        className="mt-4 focus:outline-primary"
        placeholder="Tên địa điểm vui chơi, ăn uống*"
      />

      {/* Thời gian và ngày */}
      <div className="grid sm:grid-cols-2 sm:gap-6">
        <Input name="time" type="text" className="mt-4 focus:outline-primary" placeholder="Thời gian*" />
        <DatePicker placeholder="Ngày" className="mt-4 focus:outline-primary" />
      </div>

      {/* Chi phí */}
      <div className="relative mb-4">
        <Input name="budget" type="text" className="mt-4 focus:outline-primary" placeholder="Chi phí dự kiến/người*" />
        <span className="absolute top-6.5 right-4 underline">đ</span>
      </div>

      {/* Nội dung chi tiết */}
      <div className="group relative rounded-[10px] border border-border-light ring-0 focus-within:ring-1 focus-within:ring-primary focus-within:border-primary transition-all">
        <textarea
          placeholder="Nội dung chi tiết"
          className="custom-scroll w-full outline-none p-3 h-50 rounded-md resize-none"
        />
        <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" id="imageUpload" />
        <label htmlFor="imageUpload" className="absolute cursor-pointer top-3 right-3 inline-block">
          <Image src="/add-image.svg" height={20} width={20} alt="Add image" />
        </label>
        <button className="group-focus-within:invisible w-full cursor-pointer rounded-b-[8px] text-dark-gray text-left p-4 bg-[#f7f7f7] ring-1 ring-[#f7f7f7]">
          Nhập link bài viết
        </button>
      </div>

      {/* Hiển thị ảnh đã chọn */}
      <div className="mt-4">
        <div className="mt-2 flex flex-wrap gap-2">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image}
                alt={`Uploaded ${index}`}
                width={200}
                height={200}
                className="w-[114px] h-[114px] object-cover rounded-[10px]"
              />
              <button
                className="absolute cursor-pointer top-1 right-1 text-white text-xs rounded-full"
                onClick={() => setImages(images.filter((_, i) => i !== index))}
              >
                <Image src="/close.svg" height={16} width={16} alt="Close" />
              </button>
            </div>
          ))}
        </div>
        {images.length ? <p className="text-sm text-pink mt-4">Chú ý kích thước ảnh dưới 5Mb</p> : ''}
      </div>

      {/* Địa chỉ */}
      <Input
        name="address"
        type="text"
        className="w-full border p-3 rounded-md mt-4 mt-4 focus:outline-primary"
        placeholder="Địa chỉ*"
      />

      {/* Bản đồ */}
      <div className="w-full mt-4">
        <iframe
          className="rounded-[10px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4577.9371755794!2d108.2168722757842!3d16.06108933965455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ca4c479a87%3A0xd991c45c9ccfcc1d!2zTmfDom4gaMOgbmcgU0hCIC0gQ04gxJDDoCBO4bq1bmc!5e1!3m2!1svi!2s!4v1743141970660!5m2!1svi!2s"
          width="100%"
          height="235"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Email */}
      <Input
        name="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={addEmail}
        value={email}
        className="w-full border p-3 rounded-md mt-4 mt-4 focus:outline-primary"
        placeholder="Nhập email mới bạn bè*"
      />

      {/* Danh sách email */}
      <ul className="mt-4 flex flex-col w-fit max-w-[320px] sm:max-w-[480px]">
        {emails.map((email) => (
          <li key={email} className="flex flex-1 gap-8 justify-between text-blue sm:pl-4 py-1">
            <span className="truncate">{email}</span>
            <button onClick={() => removeEmail(email)} className="text-text-sub cursor-pointer">
              Xóa
            </button>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-12">
        <button className="bg-soft hover:bg-transparent border-1 border-primary font-semibold text-primary text-[15px] cursor-pointer rounded-[10px] py-4 px-10">
          TẠO CUỘC HẸN
        </button>
      </div>
    </div>
  );
};

export default CreateForm;
