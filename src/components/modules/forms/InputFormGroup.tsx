import React from "react";
import { Field, ErrorMessage } from "formik";

interface InputFormGroupProps {
  nameAndId: string;
  placeholder?: string;
  label: string | React.ReactElement;
  type: "text" | "number" | "email";
  className?:
    | string
    | "border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-3";
}

function InputFormGroup({ nameAndId, placeholder, label, type, className }: InputFormGroupProps) {
  return (
    <div className="">
      <label className="text-black text-[18px] font-normal pb-2" htmlFor={nameAndId}>
        <span className="">{label}</span>
      </label>

      <Field
        name={nameAndId}
        id={nameAndId}
        as={"input"}
        placeholder={placeholder}
        type={type}
        className={className}
      />

      <ErrorMessage component="label" name={nameAndId} className="text-base w-full text-red" />
    </div>
  );
}

export default InputFormGroup;
