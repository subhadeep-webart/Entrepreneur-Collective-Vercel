import LeftContainer from "@/components/Banner/HomePageBanner/LeftContainer";
import CreateCommunityButton from "@/components/shared/Buttons/CreateCommunityButton";
import CommunityCard from "@/components/shared/Cards/CommunityCard";
import ConnectionCard from "@/components/shared/Cards/ConnectionCard";
import SectionHeader from "@/components/shared/Section/SectionHeader";

const MyCommunitySectionContainer = ({ headerText = "My community" }) => {
    return (
        <div className="flex flex-col gap-7">
            <SectionHeader>
                <SectionHeader.LeftContainer>
                    {headerText}
                </SectionHeader.LeftContainer>
                <SectionHeader.RightContainer>
                    <CreateCommunityButton />
                </SectionHeader.RightContainer>
            </SectionHeader>
            <div className="grid grid-cols-4 gap-7">
               <CommunityCard/>
               <CommunityCard/>
               <CommunityCard/>
               <CommunityCard/>
               <CommunityCard/>
               <CommunityCard/>
               <CommunityCard/>
               <CommunityCard/>
               <CommunityCard/>
               <CommunityCard/>
            </div>
        </div>
    )
}

export default MyCommunitySectionContainer;