"use client";
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import InputField from "@/components/ui/InputField";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";

const UploadAwardModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CustomButton
        className="text-sm w-48 h-12 border border-stone-gray bg-transparent"
        clickHandler={onOpen}
      >
        Upload awards
      </CustomButton>

      <Modal
        isOpen={isOpen}
        size="lg"
        radius="none"
        backdrop="opaque"
        onClose={onClose}
        hideCloseButton={true}
        scrollBehavior="inside"
        className=""
      >
        <ModalContent className="!py-14 !px-12">
          <ModalHeader className="flex flex-col gap-1 items-center justify-center text-2xl font-semibold text-foreground !pb-2">
            Award photo
          </ModalHeader>
          <ModalBody className="w-full !pt-8 !pb-16 no-scrollbar">
            <div className="flex justify-center">
              <div className="w-72 h-72 rounded-full flex justify-center items-center bg-very-light-gray relative">
                <Icons.Image className="text-[#B4B4B4]" size={120} />

                <button
                  type="button"
                  className="absolute bottom-3 right-4 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer"
                >
                  <Icons.Camera className="text-[#000000]" size={28} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-9">
              <InputField
                placeholder="Enter awards name"
                label="Add award name"
                classNames={{
                  inputWrapper: ["!py-0"],
                  input: [
                    "text-black",
                    "font-normal",
                    "placeholder:text-info",
                    "placeholder:font-normal",
                    "placeholder:text-xs",
                  ],
                }}
              />
            </div>
          </ModalBody>
          <ModalFooter className="flex items-center justify-center !pt-3">
            <CustomButton className="text-sm w-48 h-12" clickHandler={onClose}>
              Add
            </CustomButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UploadAwardModal;
