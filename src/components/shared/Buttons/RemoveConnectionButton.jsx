import CustomButton from "@/components/ui/Buttons/CustomButton"

const RemoveConnectionButton = ({ className, onClickHandler }) => {
    return (
        <CustomButton className={cn("w-48 font-medium h-12 text-black", className)} clickHandler={onClickHandler}>
            Yes remove
        </CustomButton>
    )
}

export default RemoveConnectionButton