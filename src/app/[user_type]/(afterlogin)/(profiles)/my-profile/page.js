import GroupMemberCard from "@/components/Feed/GroupMemberCard";
import SuggestionMemberCard from "@/components/Feed/SuggestionMemberCard";
import AddMoreKeyPersonalCard from "@/components/MyProfile/AddMoreKeyPersonelCard";
import AddProfileSectionCard from "@/components/MyProfile/AddProfileSectionCard";
import AwardsAndRecognisationSection from "@/components/MyProfile/AwardsAndRecognisationSection";
import CertificationSection from "@/components/MyProfile/CertificationSection";
import MediaAndCreatePostCard from "@/components/MyProfile/MediaAndCreatePostCard";
import ProfilePictureAndBannerSection from "@/components/MyProfile/ProfiePictureAndBannerSection";
import ProfileProgressSection from "@/components/MyProfile/ProfileProgressSection";
import WhatWeOfferingContainer from "@/components/MyProfile/WhatWeOfferingContainer";
import { getUserType } from "@/utils/lib/usertype";

const MyProfilePage = async ({ params }) => {
  const resolvedParams = await params;
  const userType = getUserType(resolvedParams.user_type);
  return (
    <section className="w-full after_login_page_section_padding">
      <ProfileProgressSection />
      <ProfilePictureAndBannerSection isEditable={true} />
      <div className="container !pt-20 grid grid-cols-12 gap-7">
        <div className="flex flex-col gap-10 col-span-8">
          <AddProfileSectionCard />
          <WhatWeOfferingContainer />
          {userType === "business" && <AddMoreKeyPersonalCard />}
          {/* <MediaAndCreatePostCard /> */}
          {userType === "business" && <AwardsAndRecognisationSection />}

          {userType === "freelancer" && <CertificationSection />}
        </div>
        <div className="col-span-4 flex flex-col gap-10">
          <GroupMemberCard />
          <SuggestionMemberCard />
        </div>
      </div>
    </section>
  );
};

export default MyProfilePage;
