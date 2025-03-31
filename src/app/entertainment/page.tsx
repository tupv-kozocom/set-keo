import React from 'react';
import { getFeaturedServiceItems, getEntertainmentSlideItems } from '@/services/api';
import PageList from '@/components/PageList';

export default async function EntertainmentPage() {
  const items = await getFeaturedServiceItems();
  const slides = await getEntertainmentSlideItems();

  return (
    <main className="min-h-screen py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <PageList items={items} type='service' slides={slides} title='Địa điểm vui chơi Đà Nẵng' titleLink='Địa điểm vui chơi'/>
      </div>
    </main>
  );
} 