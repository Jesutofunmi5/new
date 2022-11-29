import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuFacebook = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M24 12.261c0-6.63-5.375-12-12-12-6.63 0-12 5.37-12 12 0 5.988 4.387 10.953 10.125 11.852v-8.382H7.078v-3.47h3.047V9.618c0-3.007 1.789-4.668 4.53-4.668 1.314 0 2.689.234 2.689.234v2.953h-1.516c-1.488 0-1.953.926-1.953 1.875v2.25h3.328l-.535 3.469h-2.793v8.383C19.609 23.213 24 18.248 24 12.26v.001Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuFacebook.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuFacebook;
