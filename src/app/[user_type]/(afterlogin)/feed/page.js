import GroupMemberCard from "@/components/Feed/GroupMemberCard";
import GroupMemberDetails from "@/components/Feed/GroupMemberCard/GroupMemberDetails";
import PostTextAreaContainer from "@/components/Feed/PostTextAreaContainer";
import PostDisplayCardWrapper from "@/components/shared/Wrapper/PostDisplayCardWrapper";
import PostCardDisplay from "@/components/ui/Cards/PostDisplayCard";
import PostTextArea from "@/components/ui/Textarea/PostTextArea";

const FeedPage = () => {
  return (
    <section className="container after_login_page_section_padding">
      <div className="grid grid-cols-12 w-full gap-7">
        <div className="col-span-8 flex flex-col gap-10">
          <PostTextAreaContainer />
          <PostDisplayCardWrapper
            headerText={`Integer sagittis sollicitudin ligula. Nulla accumsan eros vel eleifend gravida.`}
          >
            <PostCardDisplay />
            <PostCardDisplay />
            <PostCardDisplay />
          </PostDisplayCardWrapper>
          <PostDisplayCardWrapper
            headerText={`Donec eu placerat ipsum, sit amet blandit tellus.
Nunc quis elementum arcu.`}
          >
            <div className="grid grid-cols-2 gap-7">
              <PostCardDisplay />
              <PostCardDisplay />
            </div>
          </PostDisplayCardWrapper>
          <PostDisplayCardWrapper
            headerText={`Integer sagittis sollicitudin ligula. Nulla accumsan eros vel eleifend gravida.`}
          >
            <PostCardDisplay />
          </PostDisplayCardWrapper>
        </div>
        <div className="col-span-4 w-full">
          <GroupMemberCard />
        </div>
      </div>
    </section>
  );
};

export default FeedPage;
