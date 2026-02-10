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

const LeaveGroupModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CustomButton
        className=" w-28 h-12 border border-[#000000] font-medium text-xxs bg-transparent"
        clickHandler={onOpen}
      >
        Leave group
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
            Are you sure you want to leave this group?
          </ModalHeader>
          <ModalBody className="!py-5"></ModalBody>
          <ModalFooter className="flex items-center justify-center gap-7">
            <CustomButton className=" w-48 h-12 border border-[#000000] font-medium text-sm bg-transparent">
              No I don’t want to leave
            </CustomButton>
            <CustomButton className="font-medium text-sm w-48 h-12">
              Yes I want to leave
            </CustomButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LeaveGroupModal;
