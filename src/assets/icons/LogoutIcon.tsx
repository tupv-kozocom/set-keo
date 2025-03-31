import { SvgIconProps } from '@/types/icon.type';
import React from 'react';

const PeopleIcon = ({ size, className }: SvgIconProps) => {
  return (
    <svg
      width={size || '20'}
      height={size || '21'}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.99967 2.16663H12.4997C12.9417 2.16663 13.3656 2.34222 13.6782 2.65478C13.9907 2.96734 14.1663 3.39127 14.1663 3.83329V4.66663C14.1663 4.88764 14.0785 5.0996 13.9223 5.25588C13.766 5.41216 13.554 5.49996 13.333 5.49996C13.112 5.49996 12.9 5.41216 12.7438 5.25588C12.5875 5.0996 12.4997 4.88764 12.4997 4.66663V3.83329H4.99967V17.1666H12.4997V16.3333C12.4997 16.1123 12.5875 15.9003 12.7438 15.744C12.9 15.5878 13.112 15.5 13.333 15.5C13.554 15.5 13.766 15.5878 13.9223 15.744C14.0785 15.9003 14.1663 16.1123 14.1663 16.3333V17.1666C14.1663 17.6087 13.9907 18.0326 13.6782 18.3451C13.3656 18.6577 12.9417 18.8333 12.4997 18.8333H4.99967C4.55765 18.8333 4.13372 18.6577 3.82116 18.3451C3.5086 18.0326 3.33301 17.6087 3.33301 17.1666V3.83329C3.33301 3.39127 3.5086 2.96734 3.82116 2.65478C4.13372 2.34222 4.55765 2.16663 4.99967 2.16663Z"
        fill="currentColor"
      />
      <path
        d="M13.9958 14.0791C14.3208 14.4041 14.8458 14.4041 15.1708 14.0791L18.1608 11.0891C18.3171 10.9329 18.4048 10.721 18.4048 10.5C18.4048 10.279 18.3171 10.0671 18.1608 9.91082L15.1708 6.92082C15.0124 6.77764 14.8051 6.70081 14.5916 6.7062C14.3782 6.71159 14.1749 6.79878 14.024 6.94977C13.873 7.10075 13.7858 7.30397 13.7804 7.51742C13.775 7.73088 13.8518 7.93824 13.995 8.09665L15.5583 9.66665H8.33333C8.11232 9.66665 7.90036 9.75445 7.74408 9.91073C7.5878 10.067 7.5 10.279 7.5 10.5C7.5 10.721 7.5878 10.933 7.74408 11.0892C7.90036 11.2455 8.11232 11.3333 8.33333 11.3333H15.5583L13.995 12.9033C13.8394 13.0595 13.7522 13.271 13.7523 13.4914C13.7525 13.7118 13.8401 13.9232 13.9958 14.0791Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PeopleIcon;
