import CardComponent from "@/components/ui/Cards/CardComponent";
import SuggestedMemberDetails from "./SuggestedMemberDetails";

const SuggestionMemberCard = () => {
    return (
        <CardComponent className={"max-h-[100dvh]"}>
            <CardComponent.Header>
                <h3 className="text-almost-black text-2xl font-bold">Group members</h3>
            </CardComponent.Header>
            <CardComponent.Body className={"!space-y-8"}>
                <SuggestedMemberDetails />
            </CardComponent.Body>
        </CardComponent>
    )
}

export default SuggestionMemberCard;