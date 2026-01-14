import CustomButton from "@/components/ui/Buttons/CustomButton";

const ConnectionButtonContainer=()=>{
    return(
        <div className="w-full flex justify-start gap-7">
            <CustomButton className="w-48 text-base font-medium">
                Add connection
            </CustomButton>
            <CustomButton className="bg-transparent border-1 border-black w-48 text-base font-medium">
                Visit website
            </CustomButton>
            <CustomButton className="bg-transparent border-1 border-black w-48 text-base font-medium">
                Message
            </CustomButton>
        </div>
    )
}

export default ConnectionButtonContainer;