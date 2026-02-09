"use client";
import { Icons } from "@/assets";
import GroupDetailsSection from "@/components/CommunityDetails/GroupDetailsSection";
import GroupRequests from "@/components/CommunityDetails/GroupRequests";
import InviteConnections from "@/components/CommunityDetails/InviteConnections";
import MyGroup from "@/components/CommunityDetails/MyGroups";
import GroupMemberCard from "@/components/Feed/GroupMemberCard";
import PostTextAreaContainer from "@/components/Feed/PostTextAreaContainer";
import SuggestionMemberCard from "@/components/Feed/SuggestionMemberCard";
import PostDisplayCardWrapper from "@/components/shared/Wrapper/PostDisplayCardWrapper";
import CardComponent from "@/components/ui/Cards/CardComponent";
import PostCardDisplay from "@/components/ui/Cards/PostDisplayCard";
import PostMetricSection from "@/components/ui/Cards/PostDisplayCard/PostMetricSection";
import PostUserDetails from "@/components/ui/Cards/PostDisplayCard/PostUserDetails";
import { Avatar } from "@heroui/react";

const CommunityDetailsPage = () => {
  return (
    <>
      <div className="w-full h-[444px] flex justify-center items-center bg-very-light-gray relative !mb-20">
        <Icons.Image className="text-[#B4B4B4]" size={120} />
        <Avatar
          color="default"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          className="w-48 h-48 absolute -bottom-20 left-30 border-transparent border-8 outline-none shadow-none cursor-pointer"
        />
      </div>

      <section className="after_login_page_section_padding container">
        <div className="grid grid-cols-12 w-full gap-7">
          <div className="col-span-8 flex flex-col gap-10">
            <PostTextAreaContainer />
            <PostDisplayCardWrapper
              headerText={`Integer sagittis sollicitudin ligula. Nulla accumsan eros vel eleifend gravida.`}
            >
              <PostCardDisplay />
              <PostCardDisplay />
             
            </PostDisplayCardWrapper>

             <CardComponent>
                <CardComponent.Header className={"flex-col"}>
                  <PostUserDetails />
                </CardComponent.Header>

                <CardComponent.Footer>
                  <PostMetricSection />
                </CardComponent.Footer>
              </CardComponent>
          </div>
          <div className="col-span-4 w-full flex flex-col gap-10">
            <GroupDetailsSection />
            <GroupRequests/>
            <InviteConnections/>
            <MyGroup/>
            <SuggestionMemberCard/>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityDetailsPage;
