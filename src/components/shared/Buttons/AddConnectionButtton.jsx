import CustomButton from "@/components/ui/Buttons/CustomButton";
import { cn } from "@heroui/react";

const AddConnectionButton = ({ className = "" }) => {
    return (
        <CustomButton className={cn("w-28 text-xxs", className)}>
            Add connection
        </CustomButton>
    )
}

export default AddConnectionButton;