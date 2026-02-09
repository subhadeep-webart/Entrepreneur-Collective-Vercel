import CardComponent from "@/components/ui/Cards/CardComponent";
import ProfileHeader from "./ProfileHeader";

const ProfileDescriptionCard=()=>{
    return(
        <CardComponent className={"bg-transparent border-none"}>
            <CardComponent.Body>
                <ProfileHeader/>
            </CardComponent.Body>
        </CardComponent>
    )
}

export default ProfileDescriptionCard;