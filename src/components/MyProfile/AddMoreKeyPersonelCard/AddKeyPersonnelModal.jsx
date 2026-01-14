"use client"
import CustomButton from "@/components/ui/Buttons/CustomButton";
import InputField from "@/components/ui/InputField";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";

const AddKeyPersonnelModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CustomButton className="text-sm w-48 h-12" clickHandler={onOpen}>
        Add more Key personnel
      </CustomButton>

      <Modal
        isOpen={isOpen}
        size="lg"
        radius="none"
        backdrop="opaque"
        onClose={onClose}
        hideCloseButton={true}
      >
        <ModalContent className="!py-14 !px-12">
          <ModalHeader className="flex flex-col gap-1 items-center justify-center text-2xl font-semibold text-foreground ">
            Add key personnel
          </ModalHeader>
          <ModalBody className="w-full !pt-8 !pb-16">
            <div className="grid grid-cols-1 gap-9">
              <InputField
                label="Enter key personnel"
                placeholder="Select your service"
              />

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
  )
};

export default AddKeyPersonnelModal;