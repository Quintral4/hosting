import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 248 245' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.2569 57.6441C27.9728 36.2968 42.1759 20.1952 61.5446 10.209C80.6281 0.369697 102.199 -2.07621 125.15 3.04679C153.687 9.41667 183.695 17.2073 204.58 42.1362C230.068 72.5581 253.221 112.802 246.603 148.014C240.002 183.133 201.798 190.836 173.607 206.926C144.284 223.662 117.801 254.321 81.9962 241.964C45.5737 229.394 18.3419 187.965 4.98736 148.731C-6.22708 115.785 7.70874 85.9284 19.2569 57.6441Z'
      fill='#FFCFB0'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
