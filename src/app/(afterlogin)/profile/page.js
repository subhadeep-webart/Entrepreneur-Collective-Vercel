import GroupMemberCard from "@/components/Feed/GroupMemberCard";
import AboutUsContainer from "@/components/UserProfile/AboutUsContainer";
import ConnectionButtonContainer from "@/components/UserProfile/ConnectionButtonContainer";
import ProfileDescriptionCard from "@/components/UserProfile/ProfileDescriptionCard";
import ProfilePostContainer from "@/components/UserProfile/ProfilePostContainer";
import ProvidingServiceComponent from "@/components/UserProfile/ProvidingServiceComponent";
import WhatWeOfferingContainer from "@/components/UserProfile/WhatWeOfferingContainer";

const ProfilePage = () => {
    return (
        <>
            <div className="col-span-8 flex flex-col gap-7">
                <ProfileDescriptionCard />
                <ConnectionButtonContainer />
                <ProvidingServiceComponent/>
                <AboutUsContainer/>
                <WhatWeOfferingContainer/>
                <ProfilePostContainer/>
            </div>
            <div className="col-span-4">
                <GroupMemberCard />
            </div>
        </>
    )
}

export default ProfilePage;