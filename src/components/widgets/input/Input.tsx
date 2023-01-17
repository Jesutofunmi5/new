import { useState } from "react";
import PhoneInput from "react-phone-input-2";

import type { ComponentProps } from "react";

export type Props = {
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

  if (props.type === "tel") {
    return (
      <PhoneInput
        country={"gb"}
        preferredCountries={["us", "ng", "gb", "ke"]}
        // onChange={(v, data) => {
        //   console.log(data, v);
        // }}
        containerClass={`${className} w-full border rounded-[6px]`}
        // inputClass=""
        containerStyle={{ width: "100%" }}
        inputStyle={{ width: "100%", height: "64px", paddingLeft: "72px", border: "none" }}
        buttonStyle={{
          padding: "0 8px 0 16px",
          backgroundColor: "#ffffff",
          border: "none",
          borderRadius: "6px"
        }}
        inputProps={{
          ...props
        }}
      />
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
