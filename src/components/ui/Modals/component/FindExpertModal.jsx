"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import CustomButton from "../../Buttons/CustomButton";
import { Icons } from "@/assets";
import TextareaField from "../../Textarea/TextAreaField";
import InputField from "../../InputField";
import SelectField from "../../SelectField";
import { useState } from "react";
const types = [
  { key: "Cat1", label: "Cat1" },
  { key: "Cat2", label: "Cat2" },
];

const FindExpertModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTypes, setSelectedTypes] = useState(new Set());
  return (
    <>
      <Icons.User size={18} onClick={onOpen} className="cursor-pointer" />

      <Modal
        isOpen={isOpen}
        size="xl"
        radius="none"
        backdrop="opaque"
        onClose={onClose}
        hideCloseButton={true}
        scrollBehavior="inside"
      >
        <ModalContent className="!py-14">
          <ModalHeader className="flex flex-col gap-1 items-center justify-center text-2xl font-semibold text-foreground !pb-2">
            Find an expert
          </ModalHeader>
          <ModalBody className="w-full h-full !pt-8 !pb-16 no-scrollbar">
            <p className="text-base font-semibold text-black !pl-10">
              A few questions to describe what you’re looking for:
            </p>
            <div className="grid grid-cols-1 gap-9 !px-10 !pt-10 !pb-4">
              <SelectField
                label="What do you need help with?"
                placeholder="Select your category"
                options={types}
                selectedKeys={selectedTypes}
                onChange={setSelectedTypes}
              />
              <InputField label="Location" placeholder="Please enter" endContent={ <Icons.MapPin className="text-[#222222]" size={18} />}/>
              <InputField label="Add link" placeholder="Add link" />
              <InputField label="Budget" placeholder="Add budget" />
              <InputField label="Attach document" placeholder="Attach" endContent={ <Icons.Paperclip className="text-[#222222]" size={18} />}/>
              <TextareaField label="Description" placeholder="Please enter" />
            </div>
          </ModalBody>
          <ModalFooter className="flex items-center justify-center !pt-3">
            <CustomButton className="text-sm w-48 h-12">Post</CustomButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FindExpertModal;
