import CustomButton from "@/components/ui/Buttons/CustomButton";
import { cn } from "@heroui/react";

const CreateCommunityButton = ({ className = "", onClickHandler }) => {
    return (
        <CustomButton className={cn("w-48 font-medium h-12 text-black", className)} clickHandler={onClickHandler}>
            Create community
        </CustomButton>
    )
}

export default CreateCommunityButton;