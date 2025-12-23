import CustomButton from "@/components/ui/Buttons/CustomButton";
import { cn } from "@heroui/react";

const JoinGroupButton = ({ className = "" }) => {
    return (
        <CustomButton className={cn("w-28 text-xxs", className)}>
            Join group
        </CustomButton>
    )
}

export default JoinGroupButton;