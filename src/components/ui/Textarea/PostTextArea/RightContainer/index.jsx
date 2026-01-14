import CustomButton from "@/components/ui/Buttons/CustomButton";
import AreaPlaceHolder from "../AreaPlaceHolder";
import IconGroup from "../IconGroup";
import PostModal from "../PostModal";

const RightContainer = () => {
    return (
        <div className="w-full flex flex-col gap-2">
            <PostModal/>
            <CustomButton className="w-28 text-xs text-black font-medium">
                POST
            </CustomButton>
        </div>
    )
}

export default RightContainer;