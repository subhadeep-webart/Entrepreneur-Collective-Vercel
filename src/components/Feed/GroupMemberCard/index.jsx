"use client"
import CardComponent from "@/components/ui/Cards/CardComponent";
import GroupMemberDetails from "./GroupMemberDetails";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import { useUserType } from "@/app/[user_type]/(afterlogin)/UserTypeProvider";

const GroupMemberCard = () => {
  const userType = useUserType();

  if (!userType) return null;

  return (
    <CardComponent className={"max-h-[100dvh]"}>
      <CardComponent.Header>
        <h3 className="text-almost-black text-2xl font-bold">
          Suggested connections
        </h3>
      </CardComponent.Header>
      <CardComponent.Body className={"!space-y-8"}>
        <GroupMemberDetails />
        <GroupMemberDetails />
        <GroupMemberDetails />
        <GroupMemberDetails />
        <GroupMemberDetails />
        <GroupMemberDetails />
      </CardComponent.Body>
      <CardComponent.Footer className="flex items-center justify-center lg:!pt-10">
        <LinkButton className="text-sm w-48 h-12" href={`/${userType}/my-networks`}>
          View all suggestions
        </LinkButton>
      </CardComponent.Footer>
    </CardComponent>
  );
};

export default GroupMemberCard;
