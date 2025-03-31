'use client';

import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import ManageAppointment from './component/ManageAppointment';
import ManageInvitation from './component/ManageInvitation';
import ManageAccount from './component/ManageAccount';
import TabId from '@/types/tabId.type';
import MANAGE_TABS from '@/constants/manageTab';

const TabContent = ({ activeTab }: { activeTab: TabId }) => {
  switch (activeTab) {
    case 'appointments':
      return <ManageAppointment />;
    case 'invitations':
      return <ManageInvitation />;
    case 'profile':
      return <ManageAccount />;
    default:
      return null;
  }
};

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabId>(MANAGE_TABS.APPOINTMENTS);

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
  };

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto gap-6 lg:p-12 md:p-8 p-4">
      <Sidebar onTabChange={handleTabChange} />
      <main className="col-span-12 xl:col-span-9 bg-white rounded-lg p-8">
        <TabContent activeTab={activeTab} />
      </main>
    </div>
  );
}
