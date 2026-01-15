import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import WorkshopDetailsSection from "./WorkshopDetailsSection";
import LinkButton from "@/components/ui/Buttons/LinkButton";

const WorkshopDetailsContainer = () => {
  return (
    <div>
      <div className="flex justify-between">
      <h2 className="font-semibold text-lg text-almost-black !mb-9">
        Workshops
      </h2>
       <LinkButton
        href="/create-workshop"
        className="text-base font-medium text-foreground h-11 w-[310px]"
      >
        Edit workshop
      </LinkButton>
      </div>
      <div className="relative w-[1288px] h-[393px] border border-neutral-gray ">
        <Image
          src={PUBLIC_IMAGES.ResourceImg1}
          alt=" "
          fill
          className="object-cover"
        />
      </div>
      <WorkshopDetailsSection />
    </div>
  );
};

export default WorkshopDetailsContainer;
