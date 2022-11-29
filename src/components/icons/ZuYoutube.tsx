import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuYoutube = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 17"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M19.543 2.759C20 4.541 20 8.261 20 8.261s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022-1.709.476-7.605.476-7.605.476s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C0 11.981 0 8.261 0 8.261s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C4.107.261 10 .261 10 .261s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022ZM8 11.761l6-3.5-6-3.5v7Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuYoutube.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuYoutube;
