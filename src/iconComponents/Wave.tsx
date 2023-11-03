import * as React from "react";
import type { SVGProps } from "react";
const SvgWave = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 1920 192"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M1920 105.931 1812.84 92.69c-107.17-14.897-321.49-43.035-531.35-61.242C1067.16 14.897 852.837 6.621 638.512 3.31 428.651 0 214.325 0 107.163 0H0v192H1920v-86.069Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWave;
