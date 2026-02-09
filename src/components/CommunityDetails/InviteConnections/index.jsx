import LinkButton from "@/components/ui/Buttons/LinkButton";
import CardComponent from "@/components/ui/Cards/CardComponent";
import SuggestedConnections from "./SuggestedConnections";

const InviteConnections = () => {
  return (
    <CardComponent className={"max-h-[100dvh]"}>
      <CardComponent.Header>
        <h3 className="text-almost-black text-2xl font-bold">
          Invite connections
        </h3>
      </CardComponent.Header>
      <CardComponent.Body className={"!space-y-8"}>
        <SuggestedConnections />
        <SuggestedConnections />
        <SuggestedConnections />
        <SuggestedConnections />
        <SuggestedConnections />
        <SuggestedConnections />
      </CardComponent.Body>
      <CardComponent.Footer className="flex flex-col gap-4 items-center justify-center lg:!pt-10">
        <LinkButton
          className="text-sm w-48 h-12 bg-transparent border border-black"
          href={"#"}
        >
          Invite connections
        </LinkButton>
        <LinkButton className="text-sm w-48 h-12" href={"#"}>
          View all connections
        </LinkButton>
      </CardComponent.Footer>
    </CardComponent>
  );
};

export default InviteConnections;
