import { PUBLIC_IMAGES } from "@/assets";
import DescriptionCard from "@/components/shared/Cards/DescriptionCard";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import CardComponent from "@/components/ui/Cards/CardComponent";
import Image from "next/image";

const WorkshopCard = () => {
  return (
    <CardComponent className="!px-0 !py-0 border-neutral-gray bg-white gap-0">
      <CardComponent.Header>
        <div className="relative w-[309px] h-[132px] border border-neutral-gray">
          <Image
            src={PUBLIC_IMAGES.ResourceImg1}
            alt=" "
            fill
            className="object-cover"
          />
        </div>
      </CardComponent.Header>
      <CardComponent.Body className="!px-5 !py-4 flex flex-col gap-2.5">
        <DescriptionCard
          classDiv="max-w-[257px] gap-2"
          title="High-Income Client Acquisition for Freelancers 2025"
          classTitle="text-sm text-gunmetal-gray"
          description="A step-by-step live workshop to help freelancers attract premium clients consistently."
          classDescription="max-w-[225px] text-xs text-graphite-gray"
        />
        <DescriptionCard
          classDiv="max-w-[257px] gap-2"
          title="Category / Topic"
          classTitle="text-sm text-gunmetal-gray"
          description="Freelancing, Sales & Marketing, Client Acquisition."
          classDescription="max-w-[225px] text-xs text-graphite-gray"
        />
        <div className="flex justify-between">
          <DescriptionCard
            classDiv="max-w-[65px] gap-1"
            title="Date"
            classTitle="text-sm text-gunmetal-gray"
            description="12.12.2025"
            classDescription="max-w-[65px] text-xs text-graphite-gray"
          />

          <DescriptionCard
            classDiv="max-w-[65px] gap-1"
            title="Time"
            classTitle="text-sm text-gunmetal-gray"
            description="6:00 PM to 7:30 PM IST"
            classDescription="max-w-[65px] text-xs text-graphite-gray"
          />

          <DescriptionCard
            classDiv="max-w-[65px] gap-1"
            title="Price"
            classTitle="text-sm text-gunmetal-gray"
            description="$120:00"
            classDescription="max-w-[65px] text-xs text-graphite-gray"
          />
        </div>
      </CardComponent.Body>
      <CardComponent.Footer className="!px-16 !py-9">
        <LinkButton
          href="#"
          className="bg-transparent border border-foreground text-xs font-medium text-foreground h-8 min-w-[183px] w-[183px] "
        >
          View details
        </LinkButton>
      </CardComponent.Footer>
    </CardComponent>
  );
};

export default WorkshopCard;
