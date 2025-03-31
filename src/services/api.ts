import { FeaturedItem } from "@/types/featuredItem.type";
import { Slide } from "@/types/slide.type";
// Fetch featured services
export async function getFeaturedServiceItems(): Promise<FeaturedItem[]> {
  // In a real app, replace this with actual API call:
  // const res = await fetch('your-api-endpoint/featured-services')
  // return res.json()
  
  // Mock data for now
  return [
    {
      id: 1,
      title: "Trải nghiệm bay dù lượn Đà Bắc, Hà Nội",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, mattis nisl mauris leo nisl.",
      price: "1,290,000",
      image: "/images/paragliding.jpg",
      author: "Admin",
    },
    {
        id: 2,
        title: "Trải nghiệm cắm trại",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, mattis nisl mauris leo nisl.",
        price: "1,290,000",
        image: "/images/camping.jpg",
        author: "Admin",
      },
      {
        id: 3,
        title: "Trải nghiệm du lịch biển Đà Nẵng",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, mattis nisl mauris leo nisl.",
        price: "1,290,000",
        image: "/images/beach.jpg",
        author: "Admin",
      },
      {
        id: 4,
        title: "Food tour Sài Gòn",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, mattis nisl mauris leo nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, mattis nisl mauris leo nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, mattis nisl mauris leo nisl.s",
        price: "1,290,000",
        image: "/images/food-tour.jpg",
        author: "Admin",
      },
  ];
}

// Fetch hotspot services
export async function getFeaturedDiningItems(): Promise<FeaturedItem[]> {
  // In a real app, replace with actual API call
  return [
    {
        id: 1,
        title: "Bánh mì nguyên hương cổ truyền thống Pháp",
        address: "67 Lê Lợi, Đà Nẵng",
        price: "30,000",
        image: "/images/banh-mi.jpg",
        author: "Admin"
      },
      {
        id: 2,
        title: "Quán nhậu tự do",
        address: "45 Lê Lợi, Đà Nẵng",
        price: "100,000",
        image: "/images/quan-nhau.jpg",
        author: "Admin"
      },
      {
        id: 3,
        title: "Beefsteak Núi Pháp - chỗ buồn tối hẹn hò lý tưởng",
        address: "89 Đường Trưng, Đà Nẵng",
        price: "300,000",
        image: "/images/beefsteak.jpg",
        author: "Admin"
      },
      {
        id: 4,
        title: "Hương vị vùng đồn của món Huế - Kí ức không thể phai nhòa",
        address: "34 Lê Lợi, Huế",
        price: "50,000",
        image: "/images/mon-hue.jpg",
        author: "Admin" 
      },
  ];
}

// Fetch location services
export async function getFeaturedCheckinItems(): Promise<FeaturedItem[]> {
  // In a real app, replace with actual API call
  return [
    {
        id: 1,
        title: "Trải nghiệm bay dù lượn Đồi Bù, Hà Nội",
        image: "/images/location1.jpg",
      },
      {
        id: 2,
        title: "Trải nghiệm bay dù lượn Đồi Bù, Hà Nội",
        image: "/images/location2.jpg",
      },
      {
        id: 3,
        title: "Trải nghiệm bay dù lượn Đồi Bù, Hà Nội",
        image: "/images/location3.jpg",
      },
      {
        id: 4,
        title: "Trải nghiệm bay dù lượn Đồi Bù, Hà Nội",
        image: "/images/location4.jpg",
      },
      {
        id: 5,
        title: "Trải nghiệm bay dù lượn Đồi Bù, Hà Nội",
        image: "/images/location5.jpg",
      },
  ];
} 

// Fetch location services
export async function getRestaurantSlideItems(): Promise<Slide[]> {
  // In a real app, replace with actual API call
  return [
    {
      id: 1,
      image: "/images/banner1.jpg",
      alt: "Beautiful lake with boats",
    },
    {
      id: 2,
      image: "/images/banner2.jpg",
      alt: "A girl is watching the scenery",
    },
    {
      id: 3,
      image: "/images/banner3.jpg",
      alt: "People enjoying outdoors",
    },
  ];
} 

// Fetch location services
export async function getEntertainmentSlideItems(): Promise<Slide[]> {
  // In a real app, replace with actual API call
  return [
    {
      id: 1,
      image: "/images/banner1.jpg",
      alt: "Beautiful lake with boats",
    },
    {
      id: 2,
      image: "/images/banner2.jpg",
      alt: "A girl is watching the scenery",
    },
    {
      id: 3,
      image: "/images/banner3.jpg",
      alt: "People enjoying outdoors",
    },
  ];
} 

// Fetch location services
export async function getCheckinSlideItems(): Promise<Slide[]> {
  // In a real app, replace with actual API call
  return [
    {
      id: 1,
      image: "/images/banner1.jpg",
      alt: "Beautiful lake with boats",
    },
    {
      id: 2,
      image: "/images/banner2.jpg",
      alt: "A girl is watching the scenery",
    },
    {
      id: 3,
      image: "/images/banner3.jpg",
      alt: "People enjoying outdoors",
    },
  ];
} 