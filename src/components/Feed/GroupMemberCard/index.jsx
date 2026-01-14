import CardComponent from "@/components/ui/Cards/CardComponent";
import GroupMemberDetails from "./GroupMemberDetails";

const GroupMemberCard=()=>{
    return(
        <CardComponent className={"max-h-[100dvh]"}>
            <CardComponent.Header>
                <h3 className="text-almost-black text-2xl font-bold">Group members</h3>
            </CardComponent.Header>
            <CardComponent.Body className={"!space-y-8"}>
                <GroupMemberDetails/>
                <GroupMemberDetails/>
                <GroupMemberDetails/>
                <GroupMemberDetails/>
                <GroupMemberDetails/>
                <GroupMemberDetails/>
            </CardComponent.Body>
        </CardComponent>
    )
}

export default GroupMemberCard;