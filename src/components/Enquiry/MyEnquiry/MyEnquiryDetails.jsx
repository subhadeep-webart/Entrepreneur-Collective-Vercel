"use client"
import { useUserType } from "@/app/[user_type]/(afterlogin)/UserTypeProvider";
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import CardComponent from "@/components/ui/Cards/CardComponent";
import EditEnquiryModal from "@/components/ui/Modals/component/EditEnquiryModal";
import Link from "next/link";

const MyEnquiryDetails = () => {
  const userType = useUserType();

  if (!userType) return null;
  return (
    <CardComponent>
      <CardComponent.Body className={"flex items-start flex-col gap-4"}>
        <div className="w-full flex flex-col gap-3.5">
          <div className="flex justify-end gap-2">
            <CustomButton className="rounded-full bg-blush-pink">
              <Icons.Trash2 />
            </CustomButton>
            <EditEnquiryModal />
          </div>
          <Link href={`/${userType}/enquiry-details`}>
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-semibold text-gunmetal-gray">
                Website Development
              </h4>
              <p className="text-mid-gray font-normal text-xs">USA</p>
              <span className="inline-text text-graphite-gray text-xs">
                Integer maximus gravida erat eu gravida...
              </span>
            </div>
          </Link>
        </div>
      </CardComponent.Body>
    </CardComponent>
  );
};

export default MyEnquiryDetails;
