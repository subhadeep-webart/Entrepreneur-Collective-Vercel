"use client";

import { Icons } from "@/assets";
import { Input, cn } from "@heroui/react";
import { useState } from "react";

const InputField = ({
  placement = "outside-top",
  type = "",
  label = "",
  placeholder = "",
  classNames = {}
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const defaultClassNames = {
    label: [
      "font-semibold",
      "text-base",
      "text-black",
      "mb-2",
    ],

    inputWrapper: [
      "bg-transparent",
      "hover:bg-transparent",
      "focus:bg-transparent",
      "active:bg-transparent",

      "data-[hover=true]:bg-transparent",
      "data-[focus=true]:bg-transparent",
      "data-[focus-visible=true]:shadow-none",
      "data-[pressed=true]:bg-transparent",

      "data-[filled=true]:bg-transparent",
      "data-[filled=true]:data-[hover=true]:bg-transparent",
      "data-[filled=true]:data-[focus=true]:bg-transparent",

      "!shadow-none",
      "border-0",
      "border-b",
      "border-secondary",
      "rounded-none",
      "px-0",
    ],

    input: [
      "text-black",
      "font-normal",
      "placeholder:text-info",
      "placeholder:font-normal",
      "placeholder:text-base",
    ],
  };

  const mergedClassNames = {
    label: cn(defaultClassNames.label, classNames.label),
    inputWrapper: cn(defaultClassNames.inputWrapper, classNames.inputWrapper),
    input: cn(defaultClassNames.input, classNames.input),
  };

  return (
    <Input
      key={placement}
      label={label}
      labelPlacement={placement}
      type={isPassword && showPassword ? "text" : type}
      placeholder={placeholder}
      classNames={mergedClassNames}
      endContent={
        isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="focus:outline-none"
          >
            {showPassword ? (
              <Icons.EyeOff className="text-[#222222]" size={18} />
            ) : (
              <Icons.Eye className="text-[#222222]" size={18} />
            )}
          </button>
        )
      }
    />
  );
};

export default InputField;
