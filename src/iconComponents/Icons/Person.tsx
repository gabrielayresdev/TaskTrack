import * as React from "react";
import type { SVGProps } from "react";
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 19"
    {...props}
  >
    <g clipPath="url(#person_svg__a)">
      <path
        fill="#B2B2B2"
        d="M8.5 9.5c1.288 0 2.524-.5 3.434-1.391a4.697 4.697 0 0 0 1.423-3.359c0-1.26-.512-2.468-1.422-3.359A4.913 4.913 0 0 0 8.5 0C7.212 0 5.976.5 5.065 1.391A4.697 4.697 0 0 0 3.643 4.75c0 1.26.512 2.468 1.422 3.359A4.913 4.913 0 0 0 8.5 9.5Zm-1.734 1.781C3.028 11.281 0 14.243 0 17.898 0 18.506.505 19 1.127 19h14.746c.622 0 1.127-.494 1.127-1.102 0-3.655-3.028-6.617-6.766-6.617H6.766Z"
      />
    </g>
    <defs>
      <clipPath id="person_svg__a">
        <path fill="#fff" d="M0 0h17v19H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPerson;
