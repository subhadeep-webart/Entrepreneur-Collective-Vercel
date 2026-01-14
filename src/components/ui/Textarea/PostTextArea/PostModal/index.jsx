"use client"
import CustomButton from "@/components/ui/Buttons/CustomButton";
import InputField from "@/components/ui/InputField";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import AreaPlaceHolder from "../AreaPlaceHolder";
import IconGroup from "../IconGroup";
import TypeArea from "../TypeArea";

const PostModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <button className="w-full flex items-center justify-between border-1 border-silver-gray !px-3.5 !py-4 cursor-pointer" onClick={onOpen}>
                <AreaPlaceHolder />
                <IconGroup />
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
                    <ModalHeader className="flex flex-col gap-1 items-center justify-center text-2xl font-semibold text-foreground ">
                        Create a new post
                    </ModalHeader>
                    <ModalBody className="w-full !py-8">
                        <h3 className="text-base font-semibold text-black">{`What's in your mind`}</h3>
                        <div className="grid grid-cols-1 gap-9 h-[220px]">
                        </div>
                        <TypeArea />
                    </ModalBody>
                    <ModalFooter className="flex items-center justify-center ">
                        <CustomButton className="text-sm w-48 h-12" clickHandler={onClose}>
                            POST
                        </CustomButton>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
};

export default PostModal;