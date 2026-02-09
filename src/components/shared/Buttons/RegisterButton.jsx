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
import { useRouter } from "next/navigation";

const USER_TYPE_KEY = "ec_user_type";

const RegisterButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleRegister = (type) => {
    localStorage.setItem(USER_TYPE_KEY, type);
    onClose();
    router.push("/registration");
  };
  return (
    // <LinkButton href={"/registration"} className={"w-36 h-12 bg-transparent border-1 border-black"}>
    //     Register
    // </LinkButton>
    <>
      <CustomButton
        clickHandler={onOpen}
        className={"w-36 h-12 bg-transparent border-1 border-black"}
      >
        Register
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
          <ModalHeader className="fle gap-1 items-center justify-center text-2xl font-semibold text-[#000000] ">
            Register as
          </ModalHeader>
          <ModalBody className="!py-5"></ModalBody>
          <ModalFooter className="flex items-center justify-center gap-7">
            <CustomButton
              className="font-medium text-sm w-48 h-12"
              clickHandler={() => handleRegister("business")}
            >
              Register as business
            </CustomButton>
            <CustomButton
              className=" w-48 h-12 border border-[#000000] font-medium text-sm bg-transparent"
              clickHandler={() => handleRegister("freelancer")}
            >
              Register as Freelancer
            </CustomButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterButton;
