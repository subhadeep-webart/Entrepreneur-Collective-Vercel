"use client"
import LinkButton from "@/components/ui/Buttons/LinkButton";
import { Avatar } from "@heroui/react";

const SuggestedGroups=()=>{
    return(
          <div className="flex flex-col gap-4 justify-between items-start w-full">
      <div className="flex gap-2">
        <div className="w-12 h-12">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            className="w-12 h-12"
          />
        </div>
        <div className="w-full pl-2">
          <p className="text-black font-normal text-sm">
            Christopher Washington
          </p>
          <span className="inline-block text-medium-gray font-normal text-sm">
            Sr. Designer
          </span>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <LinkButton
         className="text-sm w-28 h-12"
          href={"#"}
        >
         Accept
        </LinkButton>
        <LinkButton   className="text-sm w-28 h-12 bg-transparent border border-black" href={"#"}>
         Reject
        </LinkButton>
      </div>
    </div>
    )
};

export default SuggestedGroups;