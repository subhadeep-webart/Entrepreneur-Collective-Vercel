import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import AIToolsSection from "./AIToolsSection";

const HomeAboutUs = () => {
  return (
    <div className="container !mt-14 !mb-20 grid grid-cols-12 gap-4 lg:gap-7">
      <div className="flex flex-col col-span-12 lg:col-span-8 gap-2 lg:gap-5">
        <h3 className="font-normal text-lg lg:text-3xl text-foreground">About us</h3>
        <h4 className="font-semibold text-xl lg:text-5xl text-foreground leading-8 lg:leading-14">
          Meet the Team Fueling Entrepreneurial Growth Innovation Starts Here
        </h4>
        <p className="font-normal text-xs lg:text-base text-foreground leading-7">
          We are dedicated to empowering business owners to harness the full
          potential of their networks. We serve as a trusted platform where
          genuine and authentic connections thrive. Recognizing that success
          in business hinges on trusted relationships, we are committed to
          making it easier for individuals to connect and support each other
          in their journey towards success.
        </p>
        <div className="w-full h-[200px] lg:h-[383px] relative">
          <Image
            src={PUBLIC_IMAGES.HomeAboutImg}
            alt="home"
            fill
            className=" object-contain"
            unoptimized
          />
        </div>
      </div>
      <div className="w-full col-span-12 lg:col-span-4 flex flex-col gap-4 lg:gap-9">
        <h3 className="font-semibold lg:font-bold text-base lg:text-xl text-almost-black">Upcoming</h3>
        <AIToolsSection />
      </div>
    </div>
  );
};

export default HomeAboutUs;
