"use client";
import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/SelectField";
import { useState } from "react";
const types = [
  { key: "paid", label: "Paid" },
  { key: "hold", label: "Hold" },
  { key: "rejected", label: "Rejected" },
];
const seats = [
  { key: "12", label: "12" },
  { key: "16", label: "16" },
  { key: "23", label: "23" },
];

const TicketForm = () => {
  const [selectedTypes, setSelectedTypes] = useState(new Set());
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  return (
    <div>
      <div className="w-1/2 !mb-14">
        <SelectField
          label="Ticket Types"
          placeholder="Select"
          options={types}
          selectedKeys={selectedTypes}
          onChange={setSelectedTypes}
        />
      </div>
      <div className="!px-9 !pt-9 !pb-20 bg-white grid grid-cols-2 gap-7 border border-neutral-gray">
        <InputField label="Ticket type" placeholder="Enter ticket type" />
        <InputField
          label="Enter ticket price"
          placeholder="Enter ticket price"
        />
        <SelectField
          label="Select seat number"
          placeholder="Select seat number"
          options={seats}
          selectedKeys={selectedSeats}
          onChange={setSelectedSeats}
        />
        <InputField label="About ticket" placeholder="Enter about ticket" />
      </div>
    </div>
  );
};

export default TicketForm;
