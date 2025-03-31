import React from 'react';
import { getFeaturedServiceItems, getCheckinSlideItems } from '@/services/api';
import PageList from '@/components/PageList';

export default async function CheckinPage() {
  const items = await getFeaturedServiceItems();
  const slides = await getCheckinSlideItems();

  return (
    <main className="min-h-screen py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <PageList items={items} type='service' slides={slides} title='Check in khám phá' titleLink='Check in khám phá'/>
      </div>
    </main>
  );
} 