import RightContainer from "./RightContainer";
import BannerWrapper from "../BannerWrapper";
import LeftContainer from "./LeftContainer";

const HomePageBanner = () => {
    return (
        <BannerWrapper className="!h-[637px]">
            <LeftContainer/>
            <RightContainer />
        </BannerWrapper>
    )
}

export default HomePageBanner;