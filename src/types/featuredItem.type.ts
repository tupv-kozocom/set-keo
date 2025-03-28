// Common service type with shared properties
import { SlideShowProps } from "./slide.type";
export interface FeaturedItem {
  id: number;
  title: string;
  image: string;
  author?: string;
  price?: string;
  description?: string;
  address?: string;
}

// Available carousel types
export type CarouselType = 'service' | 'dining' | 'checkin';

// Props for the FeaturedList component
export interface FeaturedListProps {
  type: CarouselType;
  items: FeaturedItem[];
  title: string;
} 

