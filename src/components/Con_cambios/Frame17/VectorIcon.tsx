import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 159 147' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M82.2552 0.29428C101.143 0.60078 120.011 4.64945 134.062 17.3152C148.858 30.6526 160.138 49.3753 158.79 69.2839C157.498 88.3594 140.921 101.094 127.472 114.642C113.978 128.236 101.289 144.521 82.2552 146.383C61.8451 148.38 42.1775 138.567 27.2645 124.447C11.8889 109.888 0.538953 90.4913 0.827398 69.2839C1.11272 48.306 12.767 29.1435 28.7449 15.6062C43.4759 3.12541 62.9756 -0.0185757 82.2552 0.29428Z'
      fill='#ABE3C4'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
