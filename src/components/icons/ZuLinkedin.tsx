import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuLinkedin = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.429 7.23h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02C19.062 7.06 20 9.178 20 13.064v7.197h-4V13.95c0-2.213-.535-3.46-1.897-3.46-1.889 0-2.674 1.344-2.674 3.46v6.312h-4V7.231ZM.57 20.091h4V7.061h-4v13.03Zm4.573-17.28a2.53 2.53 0 0 1-.753 1.802 2.59 2.59 0 0 1-3.638.001A2.548 2.548 0 0 1 0 2.811c0-.677.27-1.325.753-1.803a2.583 2.583 0 0 1 3.637 0c.482.478.753 1.126.753 1.803Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuLinkedin.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuLinkedin;
