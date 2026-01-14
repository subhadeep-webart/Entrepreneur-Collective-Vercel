import DescriptionCard from "@/components/shared/Cards/DescriptionCard";

const Agenda = () => {
  return (
    <div className="w-full border border-neutral-gray !py-9 !px-10 bg-white !mt-14">
      <h3 className="font-semibold text-2xl text-foreground !mb-7">
        Agenda (Time Segments)
      </h3>
      <div className="grid grid-cols-2 gap-7">
        <DescriptionCard
          classDiv="max-w-[170px] gap-1"
          title="06:00–06:15 PM"
          classTitle="text-sm text-gunmetal-gray"
          description="Positioning & Crafting our Offer"
          classDescription="max-w-[170px] text-xs text-graphite-gray"
        />
        <DescriptionCard
          classDiv="max-w-[170px] gap-1"
          title="06:15–06:35 PM"
          classTitle="text-sm text-gunmetal-gray"
          description="Outreach & Social Selling Templates"
          classDescription="max-w-[170px] text-xs text-graphite-gray"
        />

        <DescriptionCard
          classDiv="max-w-[170px] gap-1"
          title="06:35–06:55 PM"
          classTitle="text-sm text-gunmetal-gray"
          description="Pricing Frameworks for High-Ticket Clients"
          classDescription="max-w-[170px] text-xs text-graphite-gray"
        />
        <DescriptionCard
          classDiv="max-w-[170px] gap-1"
          title="06:55–07:15 PM"
          classTitle="text-sm text-gunmetal-gray"
          description="Live Client Negotiation Demo"
          classDescription="max-w-[170px] text-xs text-graphite-gray"
        />
        <DescriptionCard
          classDiv="max-w-[170px] gap-1"
          title="07:15–07:30 PM"
          classTitle="text-sm text-gunmetal-gray"
          description="Q&A + Resources"
          classDescription="max-w-[170px] text-xs text-graphite-gray"
        />
      </div>
    </div>
  );
};

export default Agenda;
