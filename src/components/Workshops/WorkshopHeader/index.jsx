import LinkButton from "@/components/ui/Buttons/LinkButton";

const WorkshopHeader = () => {
  return (
    <div className="flex justify-between">
      <h2 className="font-semibold text-lg text-almost-black">Workshops</h2>
      <LinkButton
        href="#"
        className="text-base font-medium text-foreground h-12 w-48"
      >
        Create workshop
      </LinkButton>
    </div>
  );
};

export default WorkshopHeader;
