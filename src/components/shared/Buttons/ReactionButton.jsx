"use client"
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { useState } from "react";

const ReactionButton = () => {
    const [isOpenReactionDeck, setIsOpenReactionDeck] = useState(false);

    const handleReactionButtonClick = () => {
        setIsOpenReactionDeck(true);
    }
    return (
        <div className="w-full relative">
            <CustomButton clickHandler={handleReactionButtonClick} className="bg-transparent w-20">
                <Icons.ThumbsUp size={16} className="text-form-text" />
                <span className="inline-block ml-2 text-form-text text-base font-normal">Like</span>
            </CustomButton>
            {isOpenReactionDeck && <div className="absolute top-0 left-0 rounded-4xl w-fit z-10 border-1 border-black flex gap-2">
                
            </div>}
        </div>
    )
}

export default ReactionButton;