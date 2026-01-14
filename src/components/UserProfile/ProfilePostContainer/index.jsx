import CustomButton from "@/components/ui/Buttons/CustomButton"
import PostCardDisplay from "@/components/ui/Cards/PostDisplayCard"

const ProfilePostContainer = () => {
    return (
        <div className="w-full flex flex-col gap-7">
            <div className="w-full flex justify-between">
                <h3 className="font-semibold text-lg text-almost-black">Posts</h3>
                <CustomButton className="w-48">
                    View all
                </CustomButton>
            </div>
            <PostCardDisplay />
            <h3 className="font-semibold text-3xl text-almost-black">Donec eu placerat ipsum, sit amet blandit tellus.Nunc quis elementum arcu.</h3>
            <div className="grid grid-cols-2 gap-7">
                <PostCardDisplay/>
                <PostCardDisplay/>
            </div>
        </div>
    )
}

export default ProfilePostContainer