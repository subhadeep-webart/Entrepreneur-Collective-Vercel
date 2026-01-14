"use client";
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/SelectField";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@heroui/react";
import { useState } from "react";

const services = [
    { key: "paid", label: "Paid" },
    { key: "hold", label: "Hold" },
    { key: "rejected", label: "Rejected" },
];

const AddMoreService = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedServices, setSelectedServices] = useState(new Set());
    return (
        <>
            <CustomButton className="w-48 h-12">
                Add More Service
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
                    <ModalHeader className="flex flex-col gap-1 items-center justify-center text-2xl font-semibold text-foreground ">
                        Add your service
                    </ModalHeader>
                    <ModalBody className="w-full !pt-8 !pb-16">
                        <div className="grid grid-cols-1 gap-9">
                            <SelectField
                                label="Enter your service"
                                placeholder="Select your service"
                                options={services}
                                selectedKeys={selectedServices}
                                onChange={setSelectedServices}
                            />

                            <InputField label="Location" placeholder="Enter your text" />
                        </div>
                    </ModalBody>
                    <ModalFooter className="flex items-center justify-center ">
                        <CustomButton className="text-sm w-48 h-12" clickHandler={onClose}>
                            Add more service
                        </CustomButton>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddMoreService;
