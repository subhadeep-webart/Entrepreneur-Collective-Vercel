import LeftContainer from "@/components/Banner/HomePageBanner/LeftContainer";
import ConnectionCard from "@/components/shared/Cards/ConnectionCard";
import SectionHeader from "@/components/shared/Section/SectionHeader";

const MyNetworkSectionContainer = ({ headerText = "My network" }) => {
    return (
        <div className="flex flex-col gap-7">
            <SectionHeader>
                <SectionHeader.LeftContainer>
                    {headerText}
                </SectionHeader.LeftContainer>
            </SectionHeader>
            <div className="grid grid-cols-6 gap-7">
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
            </div>
        </div>
    )
}

export default MyNetworkSectionContainer;