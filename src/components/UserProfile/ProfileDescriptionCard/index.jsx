import CardComponent from "@/components/ui/Cards/CardComponent";
import ProfileHeader from "./ProfileHeader";

const ProfileDescriptionCard=()=>{
    return(
        <CardComponent className={"bg-transparent border-none h-fit !px-0"}>
            <CardComponent.Body>
                <ProfileHeader/>
            </CardComponent.Body>
        </CardComponent>
    )
}

export default ProfileDescriptionCard;