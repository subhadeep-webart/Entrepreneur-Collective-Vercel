import DiscoverPageBanner from "@/components/Discover/DiscoverPageBanner";
import DiscoverSearchSection from "@/components/Discover/DiscoverSearchSection";
import DiscoverSidebarFilter from "@/components/Discover/DiscoverSidebarFilter";

const DiscoverPageLayout = ({ children }) => {
    return (
        <section className="w-full">
            <DiscoverPageBanner />
            <section className="after_login_page_section_padding container">
                <h3 className="text-3xl text-smoky-black font-semibold text-center">Discover freelancers & businesses to collaborate</h3>
                <DiscoverSearchSection />
            </section>
            <section className="after_login_page_section_padding container !grid !grid-cols-12 !gap-7">
                <div className="col-span-3 w-full">
                    <DiscoverSidebarFilter />
                </div>
                <div className="col-span-9">
                    {children}
                </div>
            </section>
        </section>
    )
}

export default DiscoverPageLayout;