import CustomButton from "@/components/ui/Buttons/CustomButton";
import { cn } from "@heroui/react";

const CreateCommunityButton = ({ className = "" }) => {
    return (
        <CustomButton className={cn("w-48 font-medium h-12 text-black", className)}>
            Create community
        </CustomButton>
    )
}

export default CreateCommunityButton;