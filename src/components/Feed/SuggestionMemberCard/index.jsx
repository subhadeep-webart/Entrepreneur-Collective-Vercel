"use client";
import CardComponent from "@/components/ui/Cards/CardComponent";
import SuggestedMemberDetails from "./SuggestedMemberDetails";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import { useUserType } from "@/app/[user_type]/(afterlogin)/UserTypeProvider";

const SuggestionMemberCard = () => {
  const userType = useUserType();

  if (!userType) return null;
  return (
    <CardComponent className={"max-h-[100dvh]"}>
      <CardComponent.Header>
        <h3 className="text-almost-black text-2xl font-bold">
          Suggested groups
        </h3>
      </CardComponent.Header>
      <CardComponent.Body className={"!space-y-8"}>
        <SuggestedMemberDetails />
        <SuggestedMemberDetails />
        <SuggestedMemberDetails />
        <SuggestedMemberDetails />
        <SuggestedMemberDetails />
        <SuggestedMemberDetails />
      </CardComponent.Body>
      <CardComponent.Footer className="flex items-center justify-center lg:!pt-10">
        <LinkButton className="text-sm w-48 h-12" href={`/${userType}/my-communities`}>
          View all suggestions
        </LinkButton>
      </CardComponent.Footer>
    </CardComponent>
  );
};

export default SuggestionMemberCard;
