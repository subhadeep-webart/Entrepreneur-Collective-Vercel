import MyCommunitySectionContainer from "@/components/MyCommunities/MyCommunitySectionContainer";

const MyCommunitiesPage = () => {
    return (
        <section className="after_login_page_section_padding container">
           <MyCommunitySectionContainer />
           <MyCommunitySectionContainer headerText="We think you would also like to connect with"/>
        </section>
    )
}

export default MyCommunitiesPage;