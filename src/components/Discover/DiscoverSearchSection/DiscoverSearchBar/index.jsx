"use client"
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { Input } from "@heroui/react";

const DiscoverSearchBar = () => {
    return (
        <div className="w-full border-1 border-medium-light-gray bg-white flex">
            <Input
                className="w-full"
                placeholder="Search by skill, name, or service"
                radius={"none"}
                type="text"
                isClearable={true}
                classNames={{
                    inputWrapper:"!px-2 bg-transparent h-16"
                }}
            />
            <CustomButton className="w-full max-w-36 h-16">
                <Icons.Search size={14} className="text-black" />
                <span className="text-base font-medium text-black">Search</span>
            </CustomButton>
        </div>
    )
}

export default DiscoverSearchBar;