import type { SVGProps } from "react";
const SvgXMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      fill="#FFF9FB"
      d="M14.556 2.562A1.502 1.502 0 0 0 12.434.439L7.5 5.378 2.562.444A1.502 1.502 0 0 0 .439 2.566L5.378 7.5.444 12.438a1.502 1.502 0 0 0 2.122 2.123L7.5 9.622l4.938 4.934a1.502 1.502 0 0 0 2.123-2.122L9.622 7.5l4.934-4.938Z"
    />
  </svg>
);
export default SvgXMark;
