import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";

const LearnMoreAboutButton = ({children,buttonText}) => {
    return (
        <div className="w-fit flex flex-col justify-center items-center gap-3.5">
            <CustomButton isIconOnly={true} className="bg-jet-gray rounded-full w-20 h-20">
                {children}
            </CustomButton>
            <span className="inline-block text-white text-base text-center">{buttonText}</span>
        </div>
    )
}

export default LearnMoreAboutButton;