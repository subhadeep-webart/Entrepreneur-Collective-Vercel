import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";

const CreateWorkshopBanner=()=>{
    return(
         <div className="w-full h-[444px] flex justify-center items-center bg-very-light-gray relative">
            <Icons.Image className="text-[#B4B4B4]" size={120} />
             <CustomButton className="rounded-full absolute top-20 right-36">
                <Icons.Pen size={18} className="text-black" />
            </CustomButton>
        </div>
    )
};

export default CreateWorkshopBanner;