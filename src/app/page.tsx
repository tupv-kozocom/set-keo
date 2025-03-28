import Banner from "@/components/Banner";
import FeaturedList from "@/components/FeaturedList";
import PopularLocations from "@/components/PopularLocations";
import GroupInvite from "@/components/GroupInvite";
import { getFeaturedServiceItems, getFeaturedDiningItems, getFeaturedCheckinItems } from "@/services/api";

export default async function Home() {
  // Fetch data using server components
  const services = await getFeaturedServiceItems();
  const diningSpots = await getFeaturedDiningItems();
  const checkinSpots = await getFeaturedCheckinItems();

  return (
    <main className="min-h-scree bg-white bg-[url(/images/background2.png)]">
      <Banner />
      <FeaturedList 
        type="service" 
        items={services} 
        title="Các dịch vụ nổi bật"
      />
      <FeaturedList 
        type="dining" 
        items={diningSpots} 
        title="Địa điểm ăn uống HOT gần đây"
      />
      <PopularLocations
        type="checkin"
        items={checkinSpots}
        title="Địa điểm checkin nổi bật"
      />
      <GroupInvite />
    </main>
  );
}
