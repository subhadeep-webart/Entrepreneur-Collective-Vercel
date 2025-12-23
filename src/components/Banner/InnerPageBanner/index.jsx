"use client"
import { useSelectedLayoutSegment } from "next/navigation";
import BannerWrapper from "../BannerWrapper";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { INNER_PAGE_HEADER } from "@/contants/layout_constant";

const InnerPageBanner = () => {
    const segment = useSelectedLayoutSegment();

    const {headerText}=INNER_PAGE_HEADER?.[segment]
    return (
        <BannerWrapper>
            <LeftContainer />
            <RightContainer bannerText={headerText}/>
        </BannerWrapper>
    )
}

export default InnerPageBanner;