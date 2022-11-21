import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuArcheryTarget = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M46.27 28.809c.56 1.94.86 3.992.86 6.113 0 12.158-9.857 22.014-22.015 22.014-12.158 0-22.014-9.856-22.014-22.014 0-12.159 9.856-22.015 22.014-22.015 2.123 0 4.177.3 6.12.86"
        fill="currentColor"
        strokeWidth={2.935}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.115 47.152c6.755 0 12.23-5.476 12.23-12.23 0-6.755-5.475-12.23-12.23-12.23-6.755 0-12.23 5.475-12.23 12.23 0 6.754 5.475 12.23 12.23 12.23ZM25.115 34.922l28.13-28.13M48.353 11.684l-2.446-7.338-7.339 7.338 2.446 7.338 7.339 2.446 7.338-7.338-7.338-2.446Z"
        fill="currentColor"
        strokeWidth={2.935}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
SvgZuArcheryTarget.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuArcheryTarget;
