import { Icons } from "@/assets";
import { Avatar, Badge } from "@heroui/react";

const CommunityDetails = () => {
    return (
        <div className="w-full flex flex-col gap-3.5">
            <div className="w-full flex justify-between">
                <Avatar className="w-14 h-14" isBordered />
                <div className="flex gap-2.5">
                    <Icons.MessageCircle size={16} className="text-form-text" />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-gunmetal-gray font-semibold text-sm">CodeSphere Inc.</p>
                <span className="inline-tex text-graphite-gray text-xxs">Nam eu pellentesque ipsumdui. Integer eu lectus quis ex maximus bibendum. Phasellus condimentum</span>
            </div>
        </div>
    )
}

export default CommunityDetails;