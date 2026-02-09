"use client"
import { Icons } from "@/assets";
import { cn } from "@heroui/react";

const SearchButton = ({className}) => {
  return (
    <div className={cn("w-[35px] h-[35px] bg-primary rounded-full flex items-center justify-center",className)}>
      <Icons.Search size={18} />
    </div>
  );
};

export default SearchButton;
