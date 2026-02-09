import { PUBLIC_IMAGES } from "@/assets";
import ExpertiseCardContainer from "@/components/Features/ExpertiseCardContainer";
import QuestionAndAnswerSection from "@/components/Features/QuestionAndAnswerSection";
import RightPeopleSection from "@/components/Home/RightPeopleSection";
import AddConnectionCaraousal from "@/components/shared/Caraousal/AddConnectionCaraousal";
import InnerPageSectionHeader from "@/components/shared/InnerPage/InnerPageSectionHeader";
import { INNER_PAGE_HEADER } from "@/contants/layout_constant";
import Image from "next/image";

const FeaturesPage = () => {
    const pageContent = INNER_PAGE_HEADER?.["features"]?.sectionHeader;
    return (
        <>
            <InnerPageSectionHeader headerText={pageContent?.headerText ?? ""} subText={pageContent?.subText ?? ""} />
            <div className="flex flex-col gap-4">
                <ExpertiseCardContainer />
                <RightPeopleSection />
            </div>
            <QuestionAndAnswerSection />
            <InnerPageSectionHeader headerText="See How We Empower Entrepreneurs" subText="Watch inspiring stories, expert insights, and real success journeys from our community of innovators and leaders" />
            <div className="w-full h-[550px] relative container">
                <Image src={PUBLIC_IMAGES?.HomeAboutImg} className="w-full object-cover h-full relative" fill alt="image" />
            </div>
            <InnerPageSectionHeader headerText="The Brains Behind the Success" subText="Connect with experienced entrepreneurs, industry specialists, and thought leaders ready to guide your journey" />
            <AddConnectionCaraousal data={[1, 2, 3, 4, 5]} />
        </>
    )
}

export default FeaturesPage;