"use client";

import { Input } from "@heroui/react";

const MobileInput = ({
  placement = "outside-top",
  type = "",
  label = "",
  placeholder = "",
}) => {
  return (
    <Input
      key={placement}
      label={label}
      labelPlacement={placement}
      type={type}
      placeholder={placeholder}
      classNames={{
        label: ["font-semibold", "text-sm", "text-[#000000]", "mb-2"],

        inputWrapper: [

          "bg-white",
          "hover:bg-white",
          "focus:bg-white",
          "active:bg-white",

          // override internal states
          "data-[hover=true]:bg-white",
          "data-[focus=true]:bg-white",
          "data-[focus-visible=true]:shadow-none",
          "data-[pressed=true]:bg-white",

          //  When input has value
          "data-[filled=true]:bg-white",
          "data-[filled=true]:data-[hover=true]:bg-white",
          "data-[filled=true]:data-[focus=true]:bg-white",


          "!shadow-none",

          "border-0",
          "border-b",
          "border-[#C3C3C3]",
          "rounded-none",
          "px-0",
        ],

        input: [
          "text-base",
          "font-normal",
          "placeholder:text-[#919191]",
          "placeholder:font-normal",
          "placeholder:text-[15px]",
        ],
      }}

    />
  )
};

export default MobileInput;