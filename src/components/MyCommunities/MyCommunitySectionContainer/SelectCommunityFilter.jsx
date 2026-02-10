
"use client";
import { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownItem, DropdownMenu } from "@heroui/react";
import { Icons } from "@/assets";

const options = [
  { key: "sent", label: "Sent group requests" },
];

const SelectCommunityFilter = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <button className="bg-transparent border-none p-2 flex items-center justify-center cursor-pointer">
          <Icons.ListFilter />
        </button>
      </DropdownTrigger>

      <DropdownMenu className=" w-full bg-white border border-secondary rounded-none shadow-md">
        {options.map((item) => (
          <DropdownItem
            key={item.key}
            onClick={() => setSelected(item.key)}
            className="!px-3 !py-3 hover:bg-gray-100 cursor-pointer rounded-none"
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SelectCommunityFilter;


