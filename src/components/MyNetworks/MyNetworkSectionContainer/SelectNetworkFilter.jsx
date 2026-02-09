// "use client";
// import { Select, SelectItem } from "@heroui/react";
// import { useState } from "react";
// import { Icons } from "@/assets";

// const options = [
//   { key: "sent", label: "Sent connection requests" },
//   { key: "pending", label: "Pending connection requests" },
// ];

// const SelectNetworkFilter = () => {
//   const [selectedKeys, setSelectedKeys] = useState(new Set());

//   return (
//     <Select
//       placeholder={<Icons.ListFilter />}
//       selectedKeys={selectedKeys}
//       onValueChange={(value) => setSelectedKeys(new Set([value]))}
//       classNames={{
//         trigger: [
//           "bg-transparent",
//           "hover:bg-transparent",
//           "data-[hover=true]:bg-transparent",
//           "data-[pressed=true]:bg-transparent",
//           "data-[focus=true]:bg-transparent",
//           "data-[open=true]:bg-transparent",
//           "data-[focus-visible=true]:shadow-none",
//           "border-none",
//           "rounded-none",
//           "px-2",
//           "shadow-none",
//           "min-h-[42px]",
//           "flex items-center gap-2",
//         ],
//         value: ["text-info", "text-base"],
//         popoverContent: ["rounded-none"],
//         listbox: ["rounded-none"],
//       }}
//     >
//       {options.map((item) => (
//         <SelectItem
//           key={String(item.key)}
//           textValue={item.label}
//           value={item.key}
//           className="!pl-2 rounded-none !py-4"
//         >
//           {item.label}
//         </SelectItem>
//       ))}
//     </Select>
//   );
// };

// export default SelectNetworkFilter;


"use client";
import { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownItem, DropdownMenu } from "@heroui/react";
import { Icons } from "@/assets";

const options = [
  { key: "sent", label: "Sent connection requests" },
  { key: "pending", label: "Pending connection requests" },
];

const SelectNetworkFilter = () => {
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

export default SelectNetworkFilter;


