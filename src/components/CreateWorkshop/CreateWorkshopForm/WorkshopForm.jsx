"use client";
import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/SelectField";
import TextareaField from "@/components/ui/Textarea/TextAreaField";
import { useState } from "react";
import WalkAwayWithForm from "./WalkAwayWithForm";
import RefundPolicyForm from "./RefundPolicyForm";
import TicketForm from "./TicketForm";
import LinkButton from "@/components/ui/Buttons/LinkButton";

const categories = [
  { key: "design", label: "Design" },
  { key: "development", label: "Development" },
  { key: "marketing", label: "Marketing" },
  { key: "product", label: "Product" },
];

const WorkshopForm = () => {
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  return (
    <div>
      <div className="flex flex-col gap-10 !mb-12">
        <InputField label="Add tagline" placeholder="Enter tagline" />
        <SelectField
          label="Category Topic"
          placeholder="Select Categories"
          options={categories}
          selectedKeys={selectedCategories}
          onChange={setSelectedCategories}
        />
        <div className="flex gap-6 max-w-[600px]">
          <InputField
            label="Select date"
            placeholder="Please select"
            isDate={true}
          />
          <InputField
            label="Select time"
            placeholder="Please select"
            isTime={true}
          />
        </div>
        <TextareaField
          label="Add description"
          placeholder="Enter description"
        />
      </div>
      <div className="!mb-10">
        <h3 className="font-semibold text-lg text-graphite-gray !mb-7">
          By the end of this workshop, you&apos;ll walk away with:
        </h3>
        <WalkAwayWithForm />
      </div>
      <div className="!mb-12">
        <h3 className="font-semibold text-lg text-graphite-gray !mb-7">
          Refund Policy
        </h3>
        <RefundPolicyForm />
      </div>
      
      <TicketForm/>
      <LinkButton href="#" className="w-80 h-14 text-base font-medium !mt-12">Pay & join now</LinkButton>

    </div>
  );
};

export default WorkshopForm;
