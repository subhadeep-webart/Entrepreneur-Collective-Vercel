import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import AIToolsSection from "./AIToolsSection";

const HomeAboutUs = () => {
  return (
    <div className="container !mt-14 !mb-20">
      <div className="flex gap-6">
        <div className="!mt-4 flex flex-col">
          <h3 className="font-normal text-3xl text-foreground !mb-5">About us</h3>
          <h4 className="font-semibold text-5xl text-foreground !mb-6 leading-14">
            Meet the Team Fueling Entrepreneurial Growth Innovation Starts Here
          </h4>
          <p className="font-normal text-base text-foreground !mb-11 leading-7">
            We are dedicated to empowering business owners to harness the full
            potential of their networks. We serve as a trusted platform where
            genuine and authentic connections thrive. Recognizing that success
            in business hinges on trusted relationships, we are committed to
            making it easier for individuals to connect and support each other
            in their journey towards success.
          </p>
          <div className="w-[869px] h-[383px] relative">
            <Image
              src={PUBLIC_IMAGES.HomeAboutImg}
              alt="home"
              fill
              className=" object-contain"
              unoptimized
            />
          </div>
        </div>
        <div className="">
          <h3 className="font-bold text-xl text-almost-black !mb-9">Upcoming</h3>
        <AIToolsSection/>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
