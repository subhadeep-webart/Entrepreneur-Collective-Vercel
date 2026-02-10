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

const RemoveconnectionModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CustomButton
        className=" w-48 h-12 border border-[#000000] font-medium text-xxs bg-transparent"
        clickHandler={onOpen}
      >
        Remove connection
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
          <ModalHeader className="fle gap-1 items-center justify-center text-2xl font-semibold text-[#000000] text-center ">
            Are you sure you want to remove this connection?
          </ModalHeader>
          <ModalBody className="!py-5"></ModalBody>
          <ModalFooter className="flex items-center justify-center gap-7">
            <CustomButton className=" w-48 h-12 border border-[#000000] font-medium text-sm bg-transparent">
              Don’t remove
            </CustomButton>
            <CustomButton className="font-medium text-sm w-48 h-12">
              Yes remove
            </CustomButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RemoveconnectionModal;
