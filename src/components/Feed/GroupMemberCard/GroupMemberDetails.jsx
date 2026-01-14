"use client"

import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { Avatar } from "@heroui/react";

const GroupMemberDetails = () => {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="w-1/4">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-12 h-12" />
            </div>
            <div className="w-2/4">
                <p className="text-black font-normal text-sm">Christopher Washington</p>
                <span className="inline-block text-medium-gray font-normal text-sm">Sr. Designer</span>
            </div>
            <div className="w-1/4 text-right">
                <CustomButton className=" bg-transparent rounded-full" label="Add Group Member" isIconOnly={true}>
                    <Icons.UserRoundPlus size={30} className="text-coral-red" />
                </CustomButton>
            </div>
        </div>
    )
}

export default GroupMemberDetails;