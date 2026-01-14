import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";

const AddOnsDetails = () => {
    return (
        <div className="w-full flex justify-between items-start">
            <div className="w-full text-black flex flex-col gap-1">
                <h3 className="text-lg font-normal">Recommended Profile Badge</h3>
                <p className="text-lg font-semibold">$ 50</p>
            </div>
            <div className="w-fit">
                <CustomButton>
                    <Icons.CirclePlus size={18} className="text-[#3D3D3D]" />
                </CustomButton>
            </div>
        </div>
    )
}

export default AddOnsDetails;