import GroupMemberCard from "@/components/Feed/GroupMemberCard";
import ProfileDescriptionCard from "@/components/UserProfile/ProfileDescriptionCard";

const ProfilePage = () => {
    return (
        <>
            <div className="col-span-8">
                <ProfileDescriptionCard />
            </div>
            <div className="col-span-4">
                <GroupMemberCard />
            </div>
        </>
    )
}

export default ProfilePage;