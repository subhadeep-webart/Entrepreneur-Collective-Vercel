import CustomButton from "@/components/ui/Buttons/CustomButton";
import AreaPlaceHolder from "../AreaPlaceHolder";
import IconGroup from "../IconGroup";
import TextAreaButton from "../TextAreaButton";

const RightContainer = () => {
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="w-full flex items-center justify-between border-1 border-silver-gray !px-3.5 !py-4">
                {/* <AreaPlaceHolder /> */}
                <TextAreaButton/>
                {/* <IconGroup /> */}
            </div>
            {/* <CustomButton className="w-28 text-xs text-black font-medium">
                POST
            </CustomButton> */}
        </div>
    )
}

export default RightContainer;