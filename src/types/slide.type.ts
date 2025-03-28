export interface Slide {
    id: number;
    image: string;
    alt: string;
  }
  
export interface SlideShowProps {
    slides: Slide[];
    fullWidth?: boolean; // Để xác định chiều rộng (full hoặc 2/3)
  }