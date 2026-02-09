"use client";
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import CardComponent from "@/components/ui/Cards/CardComponent";
import { Avatar } from "@heroui/react";

const EnquiryDetailsCard = () => {
  return (
    <CardComponent>
      <CardComponent.Body className={"flex items-start flex-col gap-4"}>
        <div className="w-full flex flex-col gap-3.5">
          <div className="w-full flex flex-col gap-3.5">
            <div className="w-full flex justify-between">
              <Avatar className="w-12 h-12" isBordered />
              <div className="flex gap-2.5">
                <Icons.MessageCircleMore size={20} className="text-form-text" color="#FD4F38"/>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold text-gunmetal-gray">
              Website Development
            </h4>
            <p className="text-mid-gray font-normal text-xs">USA</p>
            <span className="inline-text text-graphite-gray text-xs">
              Integer maximus gravida erat eu gravida...
            </span>
          </div>
        </div>
      </CardComponent.Body>
    </CardComponent>
  );
};

export default EnquiryDetailsCard;
