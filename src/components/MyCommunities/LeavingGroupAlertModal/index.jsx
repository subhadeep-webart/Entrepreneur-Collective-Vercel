import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    useDraggable,
} from "@heroui/react";
import LeavingGroupButtonGroup from "./LeavingGroupButtonGroup";

export default function LeavingGroupAlertModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <p className="text-black text-2xl font-semibold">
                                    Are you sure you want to leave this group?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <LeavingGroupButtonGroup removeHandler={onClose} closeHandler={onClose} />
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

