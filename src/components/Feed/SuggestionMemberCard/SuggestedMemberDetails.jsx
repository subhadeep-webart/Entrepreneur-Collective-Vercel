"use client"

import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { Avatar } from "@heroui/react";

const SuggestedMemberDetails = () => {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="w-3/4 flex gap-2">
                <div className="w-12 h-12">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-12 h-12" />
                </div>
                <div className="w-full pl-2">
                    <p className="text-black font-normal text-sm">Christopher Washington</p>
                    <span className="inline-block text-medium-gray font-normal text-sm">Sr. Designer</span>
                </div>
            </div>
            <div className="w-1/4 text-right">
                <CustomButton className="bg-transparent border-1 border-black text-black text-base font-medium w-24" label="Add Group Member">
                    JOIN
                </CustomButton>
            </div>
        </div>
    )
}

export default SuggestedMemberDetails;