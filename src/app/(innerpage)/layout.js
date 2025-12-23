import InnerPageBanner from "@/components/Banner/InnerPageBanner";
import Footer from "@/components/Layout/Footer";
import InnerPageHeader from "@/components/Layout/InnerPage/InnerPageHeader";
import InnerPageSectionHeader from "@/components/shared/InnerPage/InnerPageSectionHeader";
import GetStartedSection from "@/components/shared/Section/GetStartedSection";

const InnerPageLayout = ({ children }) => {
    return (
        <>
            <InnerPageHeader />
            <InnerPageBanner />
            <section className="inner_page_section_padding">
                {children}
            </section>
            <GetStartedSection />
            <Footer />
        </>
    )
}

export default InnerPageLayout;