import LinkButton from "@/components/ui/Buttons/LinkButton";
import CardComponent from "@/components/ui/Cards/CardComponent";
import SuggestedGroups from "./SuggestedGroups";

const GroupRequests=()=>{
    return(
         <CardComponent className={"max-h-[100dvh]"}>
      <CardComponent.Header>
        <h3 className="text-almost-black text-2xl font-bold">
        Group requests
        </h3>
      </CardComponent.Header>
      <CardComponent.Body className={"!space-y-8"}>
       <SuggestedGroups/>
       <SuggestedGroups/>
       <SuggestedGroups/>
      </CardComponent.Body>
    </CardComponent>
    )
};

export default GroupRequests;