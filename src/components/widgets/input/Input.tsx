import type { ComponentProps } from "react";

type Props = {
  size?: "sm" | "md" | "lg";
} & Omit<ComponentProps<"input">, "size">;

const Input = ({ size = "md", className = "", ...props }: Props) => {
  const getSize = (size: string) => {
    switch (size) {
      case "sm":
        return "px-2 h-10";
      case "md":
        return "px-4 h-12";
      case "lg":
        return "px-6 h-16";

      default:
        return "p-1 h-10";
    }
  };

  return (
    <input
      className={`${getSize(
        size
      )} ${className} text-base placeholder:text-[#8692A6] border rounded-[6px] focus:border-primary`}
      {...props}
    />
  );
};

export default Input;
