import GroupMemberCard from "@/components/Feed/GroupMemberCard";
import SuggestionMemberCard from "@/components/Feed/SuggestionMemberCard";
import AddMoreKeyPersonalCard from "@/components/MyProfile/AddMoreKeyPersonelCard";
import AddProfileSectionCard from "@/components/MyProfile/AddProfileSectionCard";
import AwardsAndRecognisationSection from "@/components/MyProfile/AwardsAndRecognisationSection";
import MediaAndCreatePostCard from "@/components/MyProfile/MediaAndCreatePostCard";
import ProfilePictureAndBannerSection from "@/components/MyProfile/ProfiePictureAndBannerSection";
import ProfileProgressSection from "@/components/MyProfile/ProfileProgressSection";
import WhatWeOfferingContainer from "@/components/MyProfile/WhatWeOfferingContainer";

const MyProfilePage = () => {
    return (
        <section className="w-full after_login_page_section_padding">
            <ProfileProgressSection />
            <ProfilePictureAndBannerSection isEditable={true}/>
            <div className="container !pt-20 grid grid-cols-12 gap-7">
                <div className="flex flex-col gap-10 col-span-8">
                    <AddProfileSectionCard />
                    <WhatWeOfferingContainer />
                    <AddMoreKeyPersonalCard />
                    <MediaAndCreatePostCard />
                    <AwardsAndRecognisationSection />
                </div>
                <div className="col-span-4 flex flex-col gap-10">
                    <GroupMemberCard />
                    <SuggestionMemberCard />
                </div>
            </div>
        </section>
    )
}

export default MyProfilePage;