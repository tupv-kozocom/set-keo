export interface Slide {
  id: number;
  image: string;
  alt: string;
}

export interface SlideShowProps {
  slides: Slide[];
  fullWidth?: boolean; //To determine if the SlideShow should be full width (full or 2/3)
}