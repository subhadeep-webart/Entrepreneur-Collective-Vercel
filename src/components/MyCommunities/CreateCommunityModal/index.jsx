"use client";
import ProfilePictureAndBannerSection from "@/components/MyProfile/ProfiePictureAndBannerSection";
import CreateCommunityButton from "@/components/shared/Buttons/CreateCommunityButton";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/SelectField";
import TextareaField from "@/components/ui/Textarea/TextAreaField";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@heroui/react";
import { useState } from "react";
import GroupPictureBanner from "./GroupPictureBanner";
import WhatWeOfferingContent from "./WhatWeOfferingContent";

const types = [
    { key: "paid", label: "Paid" },
    { key: "hold", label: "Hold" },
    { key: "rejected", label: "Rejected" },
];

const CreateCommunityModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedTypes, setSelectedTypes] = useState(new Set());

    return (
        <>
            <CreateCommunityButton onClickHandler={onOpen} />

            <Modal
                isOpen={isOpen}
                size="3xl"
                radius="none"
                backdrop="opaque"
                onClose={onClose}
                hideCloseButton={true}
                scrollBehavior="inside"
            >
                <ModalContent className="!py-14">
                    <ModalHeader className="flex flex-col gap-1 items-center justify-center text-2xl font-semibold text-foreground text-center">
                        Create Group
                    </ModalHeader>
                    <ModalBody className="w-full !pt-8 !pb-16 flex flex-col gap-20">
                        <div className="grid grid-cols-1 w-full">
                            <GroupPictureBanner />
                        </div>
                        <div className="w-full !px-20 !py-8 flex flex-col gap-12">
                            <InputField
                                label="Group name"
                                placeholder="Enter your group name"
                            />
                            <SelectField
                                label="Organization type"
                                placeholder="Please select"
                                options={types}
                                selectedKeys={selectedTypes}
                                onChange={setSelectedTypes}
                            />
                            <InputField
                                label="Company slogan"
                                placeholder="Enter your company slogan"
                            />
                            <InputField label="Expertise" placeholder="Enter your text" />
                            <InputField label="Website Link" placeholder="Enter your text" />
                            <TextareaField label="About" placeholder="Enter your text" />
                            <WhatWeOfferingContent/>
                        </div>
                    </ModalBody>
                    <ModalFooter className="flex items-center justify-center ">
                        <CustomButton className="text-sm w-48 h-12" clickHandler={onClose}>
                            Create Group
                        </CustomButton>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateCommunityModal;
