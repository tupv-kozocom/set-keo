import { FeaturedListProps } from "./featuredItem.type";
import { SlideShowProps } from "./slide.type";

export interface PageListProps extends FeaturedListProps, SlideShowProps{
    titleLink: string;
}