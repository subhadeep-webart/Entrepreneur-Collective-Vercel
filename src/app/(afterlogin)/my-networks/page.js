import MyNetworkSectionContainer from "@/components/MyNetworks/MyNetworkSectionContainer";

const MyNetworkPage = () => {
    return (
        <section className="after_login_page_section_padding container">
            <MyNetworkSectionContainer/>
            <MyNetworkSectionContainer headerText="We think you would also like to connect with"/>
        </section>
    )
}

export default MyNetworkPage;