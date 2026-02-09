"use client";

import { Select, SelectItem, Chip } from "@heroui/react";

const SelectField = ({
  label = "",
  placeholder = "Select options",
  options = [],
  selectedKeys = new Set(),
  onChange,
}) => {
  return (
    <div>
      {label && (
        <label className="font-semibold text-base text-black mb-2 block">
          {label}
        </label>
      )}

      <Select
        selectionMode="multiple"
        placeholder={placeholder}
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => {
          onChange(new Set([...keys].map(String)));
        }}
        renderValue={(items) => (
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <Chip
                key={item.key}
                size="sm"
                onClose={(e) => {
                  // e.stopPropagation();

                  const newSet = new Set(
                    [...selectedKeys].map(String)
                  );
                  newSet.delete(String(item.key));

                  onChange(newSet);
                }}
                classNames={{
                  base: [
                    "bg-white",
                    "border",
                    "border-neutral-gray",
                    "rounded-none",
                    "text-dim-gray-2",
                    "!p-3",
                    "min-h-9",
                  ],
                  content: ["text-base", "font-normal"],
                  closeButton: [
                    "!ml-2",
                    "text-light-charcoal",
                    "hover:text-light-charcoal",
                    "bg-transparent",
                    "hover:bg-transparent",
                    "rounded-full",
                  ],
                }}
              >
                {item.textValue}
              </Chip>
            ))}
          </div>
        )}
        classNames={{
          trigger: [
            "bg-transparent",
            "hover:bg-transparent",
            "data-[hover=true]:bg-transparent",
            "data-[pressed=true]:bg-transparent",
            "data-[focus=true]:bg-transparent",
            "data-[open=true]:bg-transparent",
            "data-[focus-visible=true]:shadow-none",

            "border-b",
            "border-secondary",
            "rounded-none",
            "px-0",
            "shadow-none",
            "min-h-[42px]",
          ],
          value: ["text-info", "text-base"],
          popoverContent: ["rounded-none !pl-2"],
          listbox: ["rounded-none"],
        }}
      >
        {options.map((item) => (
          <SelectItem
            key={String(item.key)} 
            textValue={item.label}
          >
            {item.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectField;
