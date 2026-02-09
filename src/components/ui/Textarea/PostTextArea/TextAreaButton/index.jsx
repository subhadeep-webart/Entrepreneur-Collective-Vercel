"use client";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import AreaPlaceHolder from "../AreaPlaceHolder";
import IconGroup from "../IconGroup";

const TextAreaButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CustomButton
        className="rounded-full bg-transparent w-[40%] text-start"
        clickHandler={onOpen}
      >
        What do you want to share?
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
          <ModalHeader className="flex gap-1 items-center justify-center text-2xl font-semibold text-[#000000] ">
            Create a new post
          </ModalHeader>
          <ModalBody className="!py-5 flex flex-col gap-24">
            <p className="text-black font-semibold text-base">
              What&apos;s in your mind{" "}
            </p>
            <div className="w-full flex items-center justify-between border-b border-silver-gray !py-3">
              <AreaPlaceHolder text="Type here"/>

              <IconGroup />
            </div>
          </ModalBody>
          <ModalFooter className="flex items-center justify-center gap-7">
            <LinkButton className=" w-48 h-12  font-medium text-sm " href="#">
              Save
            </LinkButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TextAreaButton;
