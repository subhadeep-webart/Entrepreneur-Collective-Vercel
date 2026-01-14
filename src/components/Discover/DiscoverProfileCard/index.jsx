"use client"
import CustomButton from "@/components/ui/Buttons/CustomButton";
import CardComponent from "@/components/ui/Cards/CardComponent";
import { Avatar } from "@heroui/react";

const DiscoverProfileCard = () => {
    return (
        <CardComponent>
            <CardComponent.Header className={"flex gap-4 border-b border-neutral-gray border-dashed !pb-6"}>
                <div className="w-12 h-12">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-12 h-12" isBordered={true} />
                </div>
                <div className="w-full">
                    <p className="text-gunmetal-gray font-semibold text-sm">Christopher Washington</p>
                    <span className="inline-block text-granite-gray font-normal text-xs">Sr. Designer</span>
                </div>
            </CardComponent.Header>
            <CardComponent.Body className={"flex flex-col gap-3.5"}>
                <div className="w-full flex flex-col gap-1.5">
                    <p className="text-gunmetal-gray font-semibold text-sm">Location</p>
                    <p className="text-graphite-gray text-xs font-medium">Toronto</p>
                </div>
                <div className="w-full flex flex-col gap-1.5">
                    <p className="text-gunmetal-gray font-semibold text-sm">Skills</p>
                    <p className="text-graphite-gray text-xs font-medium">Figma, UX, UI</p>
                </div>
            </CardComponent.Body>
            <CardComponent.Footer>
                <div className="grid grid-cols-2 gap-2">
                    <CustomButton className="bg-transparent border-1 border-black !text-xxs text-black font-medium w-full">
                        View profile
                    </CustomButton>
                    <CustomButton className="w-full !text-xxs text-black font-medium">
                        Add connection
                    </CustomButton>
                </div>
            </CardComponent.Footer>
        </CardComponent>
    )
}

export default DiscoverProfileCard;