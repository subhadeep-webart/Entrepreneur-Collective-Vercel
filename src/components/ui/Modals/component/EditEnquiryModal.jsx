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
import LinkButton from "../../Buttons/LinkButton";
import { Icons } from "@/assets";

const EditEnquiryModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CustomButton className="rounded-full" clickHandler={onOpen} >
        <Icons.Pen />
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
            Enquiry Details
          </ModalHeader>
          <ModalBody className="!py-5">
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-semibold text-gunmetal-gray">
                What do you need help with?
              </h4>
              <span className="inline-text text-graphite-gray text-base">
                Web developer
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-semibold text-gunmetal-gray">
                Location
              </h4>
              <span className="inline-text text-graphite-gray text-base">
                Usa
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-semibold text-gunmetal-gray">
                Description
              </h4>
              <span className="inline-text text-graphite-gray text-base">
                Nam eu pellentesque ipsum, non posuere dui. Integer eu lectus
                quis ex maximus bibendum. Phasellus condimentum velit ac
                bibendum tincidunt. Vestibulum quis arcu quis quam facilisis
                tempor in nec lorem. Duis sagittis lacus eu mi facilisis, non
                egestas metus hendrerit. Praesent mollis id arcu ut bibendum.
                Fusce cursus euismod sodales. Ut vel tellus id purus imperdiet
                malesuada. Maecenas non porta quam. Aliquam erat volutpat.
                Maecenas ut dapibus ante, vel auctor massa.
              </span>
            </div>
          </ModalBody>
          <ModalFooter className="flex items-center justify-center gap-7">
            <LinkButton
              className=" w-48 h-12 border border-[#000000] font-medium text-sm bg-transparent"
              href="#"
            >
              Save
            </LinkButton>
            <LinkButton className="font-medium text-sm w-48 h-12" href="#">
              Delete
            </LinkButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditEnquiryModal;
