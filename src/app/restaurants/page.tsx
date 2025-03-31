import React from 'react';
import { getFeaturedDiningItems, getRestaurantSlideItems } from '@/services/api';
import PageList from '@/components/PageList';

export default async function RestaurantsPage() {
  const items = await getFeaturedDiningItems();
  const slides = await getRestaurantSlideItems();

  return (
    <main className="min-h-screen py-8 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <PageList items={items} type='dining' slides={slides} title='Địa điểm ăn uống Đà Nẵng' titleLink="Địa điểm ăn uống"/>
      </div>
    </main>
  );
} 