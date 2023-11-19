import type { SVGProps } from "react";
const SvgWork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 18"
    {...props}
  >
    <path
      fill="#FE9000"
      d="M6.828 1.781h5.344c.163 0 .297.134.297.297v1.485H6.53V2.077c0-.163.134-.297.297-.297Zm-2.078.297v1.485H2.375A2.377 2.377 0 0 0 0 5.937V9.5h19V5.937a2.377 2.377 0 0 0-2.375-2.375H14.25V2.079A2.08 2.08 0 0 0 12.172 0H6.828A2.08 2.08 0 0 0 4.75 2.078ZM19 10.688h-7.125v1.187c0 .657-.53 1.188-1.188 1.188H8.313c-.657 0-1.188-.531-1.188-1.188v-1.188H0v4.75a2.377 2.377 0 0 0 2.375 2.376h14.25A2.377 2.377 0 0 0 19 15.438v-4.75Z"
    />
  </svg>
);
export default SvgWork;
