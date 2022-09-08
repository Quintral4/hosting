import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 136 147' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.430193 71.24C0.713989 53.7511 4.46275 36.2809 16.1903 23.2708C28.5398 9.57078 45.8755 -0.873348 64.3094 0.37473C81.972 1.57058 93.7635 16.9197 106.308 29.3723C118.895 41.8669 133.973 53.6161 135.698 71.24C137.547 90.1382 128.46 108.349 115.386 122.157C101.906 136.394 83.9459 146.903 64.3094 146.636C44.8855 146.372 27.1424 135.581 14.6079 120.787C3.05161 107.147 0.140513 89.0915 0.430193 71.24Z'
      fill='#ABE3C4'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
