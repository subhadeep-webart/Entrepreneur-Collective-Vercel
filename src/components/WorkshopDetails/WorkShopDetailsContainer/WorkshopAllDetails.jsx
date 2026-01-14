import { Icons } from "@/assets";
import DescriptionCard from "@/components/shared/Cards/DescriptionCard";
import WalkAwayList from "./WalkAwayList";
import TicketSection from "./TicketSection";
import LinkButton from "@/components/ui/Buttons/LinkButton";

const WorkshopAllDetails = () => {
  return (
    <div className="!mt-16 flex flex-col gap-8">
      <DescriptionCard
        classDiv="max-w-[581px] gap-3"
        title="High-Income Client Acquisition for Freelancers 2025"
        classTitle="text-4xl text-foreground leading-12"
        description="A step-by-step live workshop to help freelancers attract premium clients consistently."
        classDescription="max-w-[581px] text-lg text-graphite-gray leading-8"
      />
      <div className="max-w-[752px] flex flex-col gap-8">
        <DescriptionCard
          classDiv="max-w-[752px] gap-2"
          title="Category / Topic"
          classTitle="text-base text-gunmetal-gray"
          description="Freelancing, Sales & Marketing, Client Acquisition, Personal Branding"
          classDescription="max-w-[752px] text-base text-graphite-gray "
        />
        <DescriptionCard
          classDiv="max-w-[752px] gap-2"
          title="Date & Time / Repeating Sessions"
          classTitle="text-base text-gunmetal-gray"
          description="January 25, 2026 — 6:00 PM to 7:30 PM IST"
          classDescription="max-w-[752px] text-base text-graphite-gray "
        />
        <h5 className="font-normal text-lg text-graphite-gray">
          Unlock the exact frameworks top freelancers use to generate high-value
          leads and close premium clients.
        </h5>
        <h5 className="font-normal text-lg text-graphite-gray">
          This 90-minute live workshop covers positioning, outreach scripts,
          pricing psychology, and objection handling followed by a 30-minute Q&A
          session.
        </h5>

        <span className="font-semibold text-lg text-graphite-gray">By the end of this workshop, you&apos;ll walk away with:</span>

        <WalkAwayList />
        <TicketSection />
        <LinkButton href="#" className="w-[310px] h-12">Pay & join now</LinkButton>
      </div>
    </div>
  );
};

export default WorkshopAllDetails;
