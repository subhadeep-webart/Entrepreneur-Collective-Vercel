"use client";
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import {
  Avatar,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";

const ProfilePictureUpdateModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Avatar
        color="default"
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        className="w-48 h-48 absolute -bottom-20 left-30 border-transparent border-8 outline-none shadow-none cursor-pointer"
        onClick={onOpen}
      />

      <Modal
        isOpen={isOpen}
        size="xl"
        radius="none"
        backdrop="opaque"
        onClose={onClose}
        hideCloseButton={true}
        scrollBehavior="inside"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 items-center justify-center text-2xl font-semibold text-foreground !pt-14">
            Profile photo
          </ModalHeader>
          <ModalBody className="w-full no-scrollbar">
            <div className="flex justify-end !mr-8 !mb-6">
              <CustomButton className="rounded-full bg-blush-pink">
                <Icons.Trash2 className="text-[#000000]" size={20} />
              </CustomButton>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full flex justify-center items-center bg-very-light-gray relative">
                <Icons.Image className="text-[#B4B4B4]" size={120} />
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="flex items-center justify-center gap-7 !py-14">
            <CustomButton
              className="text-sm w-48 h-12 bg-transparent border border-foreground"
              clickHandler={onClose}
            >
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

export default ProfilePictureUpdateModal;
