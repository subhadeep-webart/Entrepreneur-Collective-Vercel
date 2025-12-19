"use client";

import Banner from "@/components/Banner";
import BrandsSection from "@/components/Home/BrandsSection";
import ConnectPeopleSection from "@/components/Home/ConnectPeopleSection";
import HomeAboutUs from "@/components/Home/HomeAboutUs";
import OurExpertsSection from "@/components/Home/OurExpertsSection";
import ReachUsSection from "@/components/Home/ReachUsSection";
import RightPeopleSection from "@/components/Home/RightPeopleSection";

export default function Home() {
  return (
    <>
      <Banner />
      <HomeAboutUs/>
      <RightPeopleSection/>
      <OurExpertsSection/>
      <ConnectPeopleSection/>
      <BrandsSection/>
      <ReachUsSection/>
    </>
  );
}
