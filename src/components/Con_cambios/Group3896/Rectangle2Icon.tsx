import { memo, SVGProps } from 'react';

const Rectangle2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 396 268' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 20C0 8.95433 8.9543 0 20 0H376C387.046 0 396 8.95431 396 20V247.354C396 258.4 387.046 267.354 376 267.354H20C8.9543 267.354 0 258.4 0 247.354V20Z'
      fill='#ABE3C4'
      fillOpacity={0.18}
    />
  </svg>
);

const Memo = memo(Rectangle2Icon);
export { Memo as Rectangle2Icon };
