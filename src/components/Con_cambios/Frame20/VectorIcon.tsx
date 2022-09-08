import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1457 1360' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1335.86 962.136C1280.62 1087.5 1193.9 1188.97 1077.75 1261.47C963.317 1332.91 835.503 1365.93 700.873 1358.55C533.477 1349.37 357.65 1333.71 238.721 1215.48C93.5869 1071.19 -36.0286 870.751 9.27878 671.01C54.4683 471.789 281.439 394.773 450.76 280.684C626.884 162.012 788.698 -30.6892 997.951 4.84123C1210.82 40.985 1364.31 244.247 1436.23 448.014C1496.63 619.127 1409.06 796.04 1335.86 962.136Z'
      fill='url(#paint0_linear_15_443)'
      fillOpacity={0.3}
    />
    <defs>
      <linearGradient
        id='paint0_linear_15_443'
        x1={1412.81}
        y1={817.27}
        x2={43.1364}
        y2={516.687}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#B48FF5' stopOpacity={0.69} />
        <stop offset={0.34252} stopColor='#ABE3C4' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
