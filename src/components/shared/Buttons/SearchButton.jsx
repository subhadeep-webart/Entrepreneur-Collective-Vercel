"use client"
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { cn } from "@heroui/react";

const SearchButton = ({ className, clickHandler }) => {
  return (
    <CustomButton className={cn("w-[35px] h-[35px] bg-primary rounded-full flex items-center justify-center", className)} clickHandler={clickHandler}>
      <Icons.Search size={18} />
    </CustomButton>
  );
};

export default SearchButton;
