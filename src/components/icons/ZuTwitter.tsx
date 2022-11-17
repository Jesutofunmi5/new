import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuTwitter = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M23.642 2.198c-.834.37-1.732.62-2.674.733A4.67 4.67 0 0 0 23.015.353a9.3 9.3 0 0 1-2.957 1.13 4.66 4.66 0 0 0-7.938 4.25A13.229 13.229 0 0 1 2.518.865a4.66 4.66 0 0 0 1.442 6.22 4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.69 4.69 0 0 1-2.104.08 4.66 4.66 0 0 0 4.352 3.234 9.347 9.347 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.112-.065 13.174 13.174 0 0 0 7.14 2.093c8.57 0 13.254-7.098 13.254-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuTwitter.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuTwitter;
