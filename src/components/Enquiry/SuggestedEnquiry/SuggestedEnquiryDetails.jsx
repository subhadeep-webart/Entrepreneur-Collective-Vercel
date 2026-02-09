"use client";
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import CardComponent from "@/components/ui/Cards/CardComponent";
import { Avatar } from "@heroui/react";

const SuggestedEnquiryDetails = () => {
  return (
    <CardComponent>
      <CardComponent.Body className={"flex items-start flex-col gap-4"}>
        <div className="w-full flex flex-col gap-3.5">
          <div className="w-full flex gap-3">
            <Avatar className="w-12 h-12" isBordered />
            <div className="flex flex-col gap-1">
              <p className="text-gunmetal-gray font-semibold text-sm">
                FoundersFuel
              </p>
              <span className="inline-text text-graphite-gray text-xxs">
                Design Agency
              </span>
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
      <CardComponent.Footer className={"flex items-center justify-center"}>
        <CustomButton className="w-32 text-xxs">I am interested</CustomButton>
      </CardComponent.Footer>
    </CardComponent>
  );
};

export default SuggestedEnquiryDetails;
