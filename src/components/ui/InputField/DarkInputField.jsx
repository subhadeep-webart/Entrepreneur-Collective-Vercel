"use client";

import { Input } from "@heroui/react";

const DarkInputField = ({
  placement = "outside-top",
  type = "",
  label = "",
  placeholder = "",
}) => {
  return (
    <Input
      key={placement}
    //   label={label}
      labelPlacement={placement}
      type={type}
      placeholder={placeholder}
      classNames={{
        label: ["font-normal", "text-sm", "text-[#9E9E9E]"],
        inputWrapper: [
          "bg-[#222222]",
          "hover:bg-[#222222]",
          "focus:bg-[#222222]",
          "active:bg-[#222222]",

          // override internal states
          "data-[hover=true]:bg-[#222222]",
          "data-[focus=true]:bg-[#222222]",
          "data-[focus-visible=true]:shadow-none",
          "data-[pressed=true]:bg-[#222222]",

          //  When input has value
          "data-[filled=true]:bg-[#222222]",
          "data-[filled=true]:data-[hover=true]:bg-[#222222]",
          "data-[filled=true]:data-[focus=true]:bg-[#222222]",

          "!shadow-none",

          "border-0",
          "border-b",
          "border-[#605C5C]",
          "rounded-none",
          "px-0",
        ],

        input: ["text-base", "font-normal", "!text-[#9E9E9E]"],
      }}
    />
  );
};

export default DarkInputField;
