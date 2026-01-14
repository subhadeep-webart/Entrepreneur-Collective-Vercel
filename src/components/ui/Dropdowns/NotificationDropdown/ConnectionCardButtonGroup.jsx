const { default: CustomButton } = require("../../Buttons/CustomButton")

const ConnectionCardButtonGroup = () => {
    return (
        <div className="w-full flex items-center gap-3">
            <CustomButton className={"w-32 font-medium h-8 text-black"} >
                Accept
            </CustomButton>
            <CustomButton className={"w-32 bg-transparent border-1 border-black font-medium h-8 text-black"}>
                Reject
            </CustomButton>
        </div>
    )
}

export default ConnectionCardButtonGroup