import CustomButton from "@/components/ui/Buttons/CustomButton"

const RemoveGroupButton = ({ className, onClickHandler }) => {
    return (
        <CustomButton className={cn("w-48 font-medium h-12 text-black", className)} clickHandler={onClickHandler}>
            Leave Group
        </CustomButton>
    )
}

export default RemoveGroupButton