import { SvgIconProps } from '@/types/icon.type';
import React from 'react';

const DocumentIcon = ({ className = '', size }: SvgIconProps) => {
  return (
    <svg
      width={size || '20'}
      height={size || '20'}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_202_1420)">
        <path
          d="M9.16699 3.33325H3.33366C2.89163 3.33325 2.46771 3.50885 2.15515 3.82141C1.84259 4.13397 1.66699 4.55789 1.66699 4.99992V16.6666C1.66699 17.1086 1.84259 17.5325 2.15515 17.8451C2.46771 18.1577 2.89163 18.3333 3.33366 18.3333H15.0003C15.4424 18.3333 15.8663 18.1577 16.1788 17.8451C16.4914 17.5325 16.667 17.1086 16.667 16.6666V10.8333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.417 2.08344C15.7485 1.75192 16.1982 1.56567 16.667 1.56567C17.1358 1.56567 17.5855 1.75192 17.917 2.08344C18.2485 2.41496 18.4348 2.8646 18.4348 3.33344C18.4348 3.80228 18.2485 4.25192 17.917 4.58344L10.0003 12.5001L6.66699 13.3334L7.50033 10.0001L15.417 2.08344Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_202_1420">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DocumentIcon;
