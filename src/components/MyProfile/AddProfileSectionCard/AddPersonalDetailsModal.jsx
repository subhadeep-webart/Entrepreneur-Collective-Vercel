"use client";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/SelectField";
import TextareaField from "@/components/ui/Textarea/TextAreaField";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";

const types = [
  { key: "paid", label: "Paid" },
  { key: "hold", label: "Hold" },
  { key: "rejected", label: "Rejected" },
];

const AddPersonalDetailsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTypes, setSelectedTypes] = useState(new Set());

  return (
    <>
      <CustomButton className="text-sm w-40" clickHandler={onOpen}>
        Add profile section
      </CustomButton>

      <Modal
        isOpen={isOpen}
        size="xl"
        radius="none"
        backdrop="opaque"
        onClose={onClose}
        hideCloseButton={true}
        scrollBehavior="inside"
      >
        <ModalContent className="!py-14 !px-12">
          <ModalHeader className="flex flex-col gap-1 items-center justify-center text-2xl font-semibold text-foreground ">
            Add personal details
          </ModalHeader>
          <ModalBody className="w-full !pt-8 !pb-16">
            <div className="grid grid-cols-1 gap-9">
              <InputField
                label="Your name / Organization name"
                placeholder="Enter your text"
              />
              <SelectField
                label="Organization type"
                placeholder="Please select"
                options={types}
                selectedKeys={selectedTypes}
                onChange={setSelectedTypes}
              />
              <InputField
                label="Company slogan"
                placeholder="Enter your text"
              />
              <InputField label="Expertise" placeholder="Enter your text" />
              <InputField label="Location" placeholder="Enter your text" />
              <TextareaField label="About" placeholder="Enter your text" />
            </div>
          </ModalBody>
          <ModalFooter className="flex items-center justify-center ">
            <CustomButton className="text-sm w-48 h-12" clickHandler={onClose}>
              Save
            </CustomButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddPersonalDetailsModal;
