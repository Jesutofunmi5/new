import { useState } from "react";

import type { ComponentProps } from "react";

type Props = {
  size?: "sm" | "md" | "lg";
} & Omit<ComponentProps<"input">, "size">;

const Input = ({ size = "md", className = "", ...props }: Props) => {
  const [password, setPassword] = useState<boolean>(true);

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
  if (props.type === "password") {
    return (
      <div
        className={`${getSize(
          size
        )} ${className} flex items-center justify-between text-base bg-white placeholder:text-[#8692A6] border rounded-[6px] focus:border-primary`}
      >
        <input
          {...props}
          type={password ? "password" : "text"}
          className="w-full h-full bg-transparent"
        />
        <div className="cursor-pointer" onClick={() => setPassword(!password)}>
          {password ? "Show" : "Hide"}
        </div>
      </div>
    );
  }

  return (
    <input
      className={`${getSize(
        size
      )} ${className} text-base bg-white placeholder:text-[#8692A6] border rounded-[6px] focus:border-primary`}
      {...props}
    />
  );
};

export default Input;
