import { Link } from "react-router-dom";

import type { ReactNode, ComponentProps } from "react";

type Props = {
  to?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "outline";
  children: ReactNode | string;
} & ComponentProps<"button">;

const Button = ({ to, children, variant = "full", className = "", ...rest }: Props) => {
  if (to !== undefined)
    return (
      <Link
        to={to}
        className={`${
          variant === "full"
            ? "bg-primary text-white " + className
            : "border-2 border-primary text-primary"
        }   rounded-[6px] px-5 py-2 `}
      >
        {children}
      </Link>
    );

  return (
    <button
      className={`${
        variant === "full"
          ? "bg-primary text-white " + className
          : "border-2 border-primary text-primary"
      }   rounded-[6px] px-5 py-2 `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
