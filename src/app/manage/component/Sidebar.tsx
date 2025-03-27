import DocumentIcon from '@/assets/icons/DocumentIcon';
import PeopleIcon from '@/assets/icons/PeopleIcon';
import UserIcon from '@/assets/icons/UserIcon';
import LogoutIcon from '@/assets/icons/LogoutIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';

const tabList = [
  {
    value: 'appointments',
    text: 'Quản lý cuộc hẹn',
    icon: DocumentIcon,
  },
  {
    value: 'invitations',
    text: 'Lời mời tham gia',
    icon: PeopleIcon,
  },
  {
    value: 'profile',
    text: 'Thông tin cá nhân',
    icon: UserIcon,
  },
  {
    value: 'logout',
    text: 'Đăng xuất',
    icon: LogoutIcon,
  },
];

const Sidebar = ({ onTabChange }: { onTabChange: (tab: string) => void }) => {
  return (
    <div className="h-fit col-span-3 bg-white px-6 py-16 rounded-[10px]">
      <div className="flex flex-col items-center">
        <Avatar className="w-18 h-18">
          <AvatarImage className="w-full h-full object-cover" src="https://github.com/shadcn.png" alt="TP" />
          <AvatarFallback className="text-lg">TP</AvatarFallback>
        </Avatar>
        <p className="mt-4 mb-2 font-bold">Tú Phạm</p>
        <a href="#" className="text-blue text-sm">
          Thay ảnh đại diện
        </a>
      </div>
      <hr className="mt-4 border-[#F2F2F2]" />

      {/* Tabs */}
      <Tabs defaultValue="appointments" onValueChange={onTabChange} className="mt-8 w-full">
        <TabsList className="flex flex-col space-y-4 w-full">
          {tabList.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <TabsTrigger
                key={index}
                value={tab.value}
                className="group flex gap-2 p-4 w-full items-start rounded-lg text-left hover:bg-gray-extra-light"
                onClick={() => {
                  if (tab.value !== 'logout') {
                    onTabChange(tab.value);
                  }
                }}
              >
                <Icon className="text-text-sub group-data-[state=active]:text-primary" />
                {tab.text}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default Sidebar;
