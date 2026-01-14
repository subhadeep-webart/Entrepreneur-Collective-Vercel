"use client";
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";

const CoverPhotoUpdateModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CustomButton
        className="rounded-full absolute top-20 right-20"
        clickHandler={onOpen}
      >
        <Icons.Pen size={18} className="text-black" />
      </CustomButton>

      <Modal
        isOpen={isOpen}
        size="4xl"
        radius="none"
        backdrop="opaque"
        onClose={onClose}
        hideCloseButton={true}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 items-center justify-center text-2xl font-semibold text-foreground !pt-14">
            Cover photo
          </ModalHeader>
          <ModalBody className="w-full">
            <div className="flex justify-end !mr-8 !mb-8">
            <CustomButton className="rounded-full bg-blush-pink"> <Icons.Trash2 className="text-[#000000]" size={20} /></CustomButton>
            </div>
            <div className="w-full h-[444px] flex justify-center items-center bg-very-light-gray relative">
              <Icons.Image className="text-[#B4B4B4]" size={120} />
            </div>
          </ModalBody>
          <ModalFooter className="flex items-center justify-center gap-7 !py-14">
            <CustomButton className="text-sm w-48 h-12 bg-transparent border border-foreground" clickHandler={onClose}>
              <Icons.Pen size={18} className="text-black" /> Edit
            </CustomButton>
             <CustomButton className="text-sm w-48 h-12" clickHandler={onClose}>
              Update
            </CustomButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CoverPhotoUpdateModal;
