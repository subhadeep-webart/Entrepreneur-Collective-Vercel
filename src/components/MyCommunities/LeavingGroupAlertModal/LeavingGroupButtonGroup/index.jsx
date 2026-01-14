import RemoveConnectionButton from "@/components/shared/Buttons/RemoveConnectionButton"
import CustomButton from "@/components/ui/Buttons/CustomButton"

const LeavingGroupButtonGroup = ({ removeHandler, closeHandler }) => {
    return (
        <div className="w-full justify-center items-center gap-7">
            <CustomButton className="bg-transparent border-1 border-black text-black" clickHandler={closeHandler}>
                {`Don't remove`}
            </CustomButton>
            <RemoveConnectionButton onClickHandler={removeHandler} />
        </div>
    )
}


export default LeavingGroupButtonGroup