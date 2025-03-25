import Banner from "@/components/Banner";
import FeaturedServices from "@/components/FeaturedServices";
import HotSpots from "@/components/HotSpots";
import PopularLocations from "@/components/PopularLocations";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <FeaturedServices />
      <HotSpots />
      <PopularLocations />
    </main>
  );
}
