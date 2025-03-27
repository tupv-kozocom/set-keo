'use client';

import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import ManageAppointment from './component/ManageAppointment';

export default function Page() {
  const [activeTab, setActiveTab] = useState('appointments');

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto gap-6 p-12">
      <Sidebar onTabChange={setActiveTab} />

      <main className="col-span-9 bg-white rounded-lg p-8">
        {activeTab === 'appointments' && <ManageAppointment />}
        {activeTab === 'invitations' && <p className="text-gray-600">Không có lời mời tham gia.</p>}
        {activeTab === 'profile' && <p className="text-gray-600">Thông tin cá nhân đang cập nhật...</p>}
      </main>
    </div>
  );
}
