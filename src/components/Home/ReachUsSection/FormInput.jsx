"use client"
import { cn, Input } from "@heroui/react";

const FormInput=({
    placeholder,type, classNames = {},...props
})=>{
    return(
         <Input
          {...props}
        placeholder={placeholder}
        radius="none"
        type={type}
       classNames={{
        base: cn(" ",classNames.base),
        inputWrapper: cn(
          "border border-graphite-gray bg-gunmetal-gray text-white h-[48px]",
          "hover:bg-gunmetal-gray focus:bg-gunmetal-gray active:bg-gunmetal-gray",
          "data-[hover=true]:bg-gunmetal-gray",
          "data-[focus=true]:bg-gunmetal-gray",
          "data-[focus-visible=true]:shadow-none",
          "data-[pressed=true]:bg-gunmetal-gray",
          "data-[filled=true]:bg-gunmetal-gray",
          "data-[filled=true]:data-[hover=true]:bg-gunmetal-gray",
          "data-[filled=true]:data-[focus=true]:bg-gunmetal-gray",
          classNames.inputWrapper
        ),

        input: cn(
          "!text-white font-normal !pl-[13px]",
          "placeholder:text-slate-gray placeholder:font-normal placeholder:text-[13px]",
          classNames.input
        ),
      }}
      />
    )
};

export default FormInput;