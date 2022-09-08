import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 258 242' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M240.257 178.074C231.701 199.812 217.313 216.844 197.408 228.287C177.795 239.562 155.42 243.767 131.429 240.637C101.599 236.745 70.2054 231.578 47.891 208.781C20.6598 180.962 -4.3782 143.279 1.66619 108.07C7.69484 72.9526 47.2436 62.1876 76.1788 44.0013C106.277 25.0842 133.089 -7.29939 170.62 1.87948C208.798 11.2168 238.106 49.7247 252.929 87.2289C265.376 118.723 251.594 149.272 240.257 178.074Z'
      fill='#ABE3C4'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
