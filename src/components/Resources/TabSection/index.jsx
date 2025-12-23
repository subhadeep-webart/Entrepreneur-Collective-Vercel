import LinkButton from "@/components/ui/Buttons/LinkButton";

const TabSection = () => {
  return (
    <div className="container !pb-14">
      <div className="flex gap-6">
        <LinkButton
          href="#"
          className="h-11 min-w-20 w-20 font-medium text-sm text-foreground"
        >
          All (24)
        </LinkButton>
        <LinkButton
          href="#"
          className="h-11 min-w-48 w-48 font-medium text-sm text-foreground border border-foreground bg-transparent"
        >
          Leadership (50)
        </LinkButton>
        <LinkButton
          href="#"
          className="h-11 min-w-48 w-48 font-medium text-sm text-foreground border border-foreground bg-transparent"
        >
          Technology (15)
        </LinkButton>
        <LinkButton
          href="#"
          className="h-11 min-w-48 w-48 font-medium text-sm text-foreground border border-foreground bg-transparent"
        >
          Partnerships (11)
        </LinkButton>
        <LinkButton
          href="#"
          className="h-11 min-w-48 w-48 font-medium text-sm text-foreground border border-foreground bg-transparent"
        >
          Careers & Growth (24)
        </LinkButton>
        <LinkButton
          href="#"
          className="h-11 min-w-48 w-48 font-medium text-sm text-foreground border border-foreground bg-transparent"
        >
          Tips & Resources (13)
        </LinkButton>
      </div>
    </div>
  );
};

export default TabSection;
