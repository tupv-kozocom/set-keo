'use client';

import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import ManageAppointment from './component/ManageAppointment';
import ManageInvitation from './component/ManageInvitation';
import ManageAccount from './component/ManageAccount';

export default function Page() {
  const [activeTab, setActiveTab] = useState('appointments');

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto gap-6 lg:p-12 md:p-8 p-4">
      <Sidebar onTabChange={setActiveTab} />

      <main className="col-span-12 xl:col-span-9 bg-white rounded-lg p-8">
        {activeTab === 'appointments' && <ManageAppointment />}
        {activeTab === 'invitations' && <ManageInvitation />}
        {activeTab === 'profile' && <ManageAccount />}
      </main>
    </div>
  );
}
