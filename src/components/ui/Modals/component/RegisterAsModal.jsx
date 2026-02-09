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
import { useRouter } from "next/navigation";

const USER_TYPE_KEY = "ec_user_type";

const RegisterAsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
   const router = useRouter();

   const handleRegister = (type) => {
    localStorage.setItem(USER_TYPE_KEY, type);
    onClose();
    router.push("/registration");
  };

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onOpen();
        }}
        type="button"
        className="text-link font-bold text-sm bg-transparent cursor-pointer"
      >
        Register as
      </button>

      <Modal
        isOpen={isOpen}
        size="lg"
        radius="none"
        backdrop="opaque"
        onClose={onClose}
        hideCloseButton={true}
      >
        <ModalContent className="!py-14 !px-12">
          <ModalHeader className="fle gap-1 items-center justify-center text-2xl font-semibold text-[#000000] ">
            Register as
          </ModalHeader>
          <ModalBody className="!py-5"></ModalBody>
          <ModalFooter className="flex items-center justify-center gap-7">
            <CustomButton className="font-medium text-sm w-48 h-12" clickHandler={() => handleRegister("business")}>
              Register as business
            </CustomButton>
            <CustomButton className=" w-48 h-12 border border-[#000000] font-medium text-sm bg-transparent"  clickHandler={() => handleRegister("freelancer")}>
              Register as Freelancer
            </CustomButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterAsModal;
