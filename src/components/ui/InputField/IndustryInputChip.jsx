"use client";
import { Icons } from "@/assets";
import InputField from ".";
import { useState } from "react";
import { Chip } from "@heroui/react";

const IndustryInputChip = () => {
  const [value, setValue] = useState("");
  const [chips, setChips] = useState([
    "IT services and it consulting",
    "Accounting",
  ]);

  const addChip = () => {
    if (!value.trim()) return;
    if (chips.includes(value.trim())) return;

    setChips((prev) => [...prev, value.trim()]);
    setValue("");
  };

  const removeChip = (chip) => {
    setChips((prev) => prev.filter((c) => c !== chip));
  };

  return (
    <div className="w-full flex gap-2">
      {chips.length > 0 && (
        <div className="flex gap-2">
          {chips.map((chip) => (
            <Chip
              key={chip}
              size="sm"
              className="bg-primary rounded-none text-black !p-4"
              onClose={() => removeChip(chip)}
            >
              {chip}
            </Chip>
          ))}
        </div>
      )}
      <InputField
        placeholder="Add industry"
        value={value}                 
        onChange={(e) => setValue(e.target.value)} 
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            addChip();
          }
        }}
        classNames={{
          input: [
            "text-black",
            "font-semibold",
            "placeholder:text-black",
            "placeholder:font-semibold",
            "placeholder:text-base",
          ],
        }}
        endContent={
          <Icons.Plus
            size={18}
            className="text-black cursor-pointer"
            onClick={addChip}
          />
        }
      />
    </div>
  );
};

export default IndustryInputChip;
