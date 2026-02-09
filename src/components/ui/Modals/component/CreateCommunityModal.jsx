"use client";
import {
  Avatar,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
  useDisclosure,
} from "@heroui/react";
import CustomButton from "../../Buttons/CustomButton";
import { Icons } from "@/assets";
import InputField from "../../InputField";
import TextareaField from "../../Textarea/TextAreaField";
import IndustryInputChip from "../../InputField/IndustryInputChip";
import { useRouter } from "next/navigation";
import { useUserType } from "@/app/[user_type]/(afterlogin)/UserTypeProvider";

const CreateCommunityModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <CustomButton
        className="w-48 font-medium h-12 text-black"
        clickHandler={onOpen}
      >
        Create community
      </CustomButton>

      <Modal
        isOpen={isOpen}
        size="5xl"
        radius="none"
        backdrop="opaque"
        onClose={onClose}
        hideCloseButton={true}
        scrollBehavior="inside"
      >
        <ModalContent className="!py-14">
          <ModalHeader className="flex flex-col gap-1 items-center justify-center text-2xl font-semibold text-foreground !pb-2">
            Create group
          </ModalHeader>
          <ModalBody className="w-full h-full !pt-8 !pb-16 no-scrollbar">
            <div className="w-full h-[333px] shrink-0 flex justify-center items-center bg-very-light-gray relative">
              <Icons.Image className="text-[#B4B4B4]" size={120} />
              <Avatar
                color="default"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                className="w-48 h-48 absolute -bottom-20 left-30 border-transparent border-8 outline-none shadow-none cursor-pointer"
              />
              <CustomButton className="rounded-full absolute top-20 right-20">
                <Icons.Pen size={18} className="text-black" />
              </CustomButton>
            </div>
            <div className="grid grid-cols-1 gap-9 !px-20 !pt-24 !pb-4">
              <InputField label="Group name" placeholder="Please enter" />
              <TextareaField label="Description" placeholder="Please enter" />
              {/* <InputField label="Add industry"  endContent={<Icons.Plus size={18} className="text-black cursor-pointer" />}/> */}
              <IndustryInputChip />
              <InputField label="Location" placeholder="Please enter" />
              <TextareaField label="Rules" placeholder="Please enter" />
              <RadioGroup
                label="Group type"
                orientation="horizontal"
                classNames={{
                  label: "text-almost-black font-semibold text-lg",
                }}
              >
                <Radio
                  description="Anyone, on or off LinkedIn can see posts in the group."
                  value="Public"
                  classNames={{
                    base: "items-start",
                    labelWrapper: "!ml-3",
                    label: "font-normal text-sm text-[#000000]",
                    description: "text-sm text-medium-gray font-normal !mt-1",
                  }}
                >
                  Public
                </Radio>
                <Radio
                  description="Anyone, on or off LinkedIn can see posts in the group."
                  value="Private"
                  classNames={{
                    base: "items-start",
                    labelWrapper: "!ml-3",
                    label: "font-normal text-sm text-[#000000]",
                    description: "text-sm text-medium-gray font-normal !mt-1",
                  }}
                >
                  Private
                </Radio>
              </RadioGroup>
            </div>
          </ModalBody>
          <ModalFooter className="flex items-center justify-center !pt-3">
            <CustomButton className="text-sm w-48 h-12">
              Create group
            </CustomButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateCommunityModal;
