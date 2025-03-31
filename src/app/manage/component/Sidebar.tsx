import DocumentIcon from '@/assets/icons/DocumentIcon';
import PeopleIcon from '@/assets/icons/PeopleIcon';
import UserIcon from '@/assets/icons/UserIcon';
import LogoutIcon from '@/assets/icons/LogoutIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React, { useCallback } from 'react';
import MANAGE_TABS from '@/constants/manageTab';
import TabId from '@/types/tabId.type';

const tabList = [
  { value: MANAGE_TABS.APPOINTMENTS, text: 'Quản lý cuộc hẹn', icon: DocumentIcon },
  { value: MANAGE_TABS.INVITATIONS, text: 'Lời mời tham gia', icon: PeopleIcon },
  { value: MANAGE_TABS.PROFILE, text: 'Thông tin cá nhân', icon: UserIcon },
  { value: 'logout', text: 'Đăng xuất', icon: LogoutIcon },
];

const Sidebar = ({ onTabChange }: { onTabChange: (tab: TabId) => void }) => {
  const handleTabChange = useCallback(
    (value: string) => {
      if (value !== 'logout') {
        onTabChange(value as TabId);
      }
    },
    [onTabChange]
  );

  return (
    <div className="h-fit col-span-12 xl:col-span-3 bg-white px-6 py-6 xl:py-16 rounded-[10px]">
      <div className="flex xl:flex-col items-center justify-center">
        <Avatar className="w-18 h-18">
          <AvatarImage className="w-full h-full object-cover" src="https://github.com/shadcn.png" alt="TP" />
          <AvatarFallback className="text-lg">TP</AvatarFallback>
        </Avatar>
        <div className="flex flex-col xl:justify-center xl:items-center ml-4 xl:ml-0">
          <p className="mt-4 mb-2 font-bold">Tú Phạm</p>
          <a href="#" className="text-blue text-sm">
            Thay ảnh đại diện
          </a>
        </div>
      </div>
      <hr className="mt-4 border-cloud-gray" />

      {/* Tabs */}
      <Tabs defaultValue={MANAGE_TABS.APPOINTMENTS} onValueChange={handleTabChange} className="mt-8 w-full">
        <TabsList className="flex xl:flex-col justify-between gap-1 lg:gap-4 w-full">
          {tabList.map(({ value, text, icon: Icon }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="group flex gap-2 p-4 w-full items-center justify-center xl:justify-start rounded-lg text-left hover:bg-gray-extra-light"
            >
              <Icon className="text-text-sub group-data-[state=active]:text-primary scale-[1.2]" />
              <span className="hidden md:inline">{text}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default Sidebar;
