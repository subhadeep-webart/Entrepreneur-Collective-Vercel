"use client"
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import CardComponent from "@/components/ui/Cards/CardComponent";
import { Avatar } from "@heroui/react";

const WhatWeOfferCard = () => {
    return (
        <CardComponent className={"relative"}>
            <CustomButton className="!w-fit !h-fit absolute top-0 right-0 bg-transparent">
                <Icons.CircleX size={20} fill="#292929" className="text-white"/>
            </CustomButton>
            <CardComponent.Body className={"flex flex-col gap-4"}>
                <div className="w-12 h-12">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-12 h-12" isBordered={true} />
                </div>
                <div className="w-full">
                    <p className="text-gunmetal-gray font-semibold text-sm">Christopher Washington</p>
                    <span className="inline-block text-granite-gray font-normal text-xs">Sr. Designer</span>
                    <span className="inline-block text-granite-gray font-normal text-xs">USA</span>
                </div>
            </CardComponent.Body>
        </CardComponent>
    )
}

export default WhatWeOfferCard;