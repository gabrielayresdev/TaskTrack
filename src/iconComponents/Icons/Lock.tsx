import * as React from "react";
import type { SVGProps } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 20"
    {...props}
  >
    <g clipPath="url(#Lock_svg__a)">
      <path
        fill="#B2B2B2"
        d="M5.464 5.464v1.822h6.072V5.464a3.035 3.035 0 1 0-6.072 0ZM3.036 7.286V5.464A5.466 5.466 0 0 1 8.5 0a5.466 5.466 0 0 1 5.464 5.464v1.822h.607A2.43 2.43 0 0 1 17 9.714V17a2.43 2.43 0 0 1-2.429 2.429H2.43A2.43 2.43 0 0 1 0 17V9.714a2.43 2.43 0 0 1 2.429-2.428h.607Z"
      />
    </g>
    <defs>
      <clipPath id="Lock_svg__a">
        <path fill="#fff" d="M0 0h17v19.429H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLock;
