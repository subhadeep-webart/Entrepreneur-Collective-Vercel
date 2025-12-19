import { PUBLIC_IMAGES } from "@/assets";
import ConnectPeopleCard from "./ConnectPeopleCard";

const ConnectPeopleSection=()=>{
    return(
        <div className="container !mb-32">
            <div className="flex gap-7">
                <ConnectPeopleCard title="CONNECT WITH PEOPLE WHO CAN HELP" image={PUBLIC_IMAGES.ConnectImg1}/>
                <ConnectPeopleCard title="FREELANCERS / SOLO SERVICE PROVIDERS" image={PUBLIC_IMAGES.ConnectImg2} classimg="w-[360px]" className="left-[16%]"/>
            </div>

        </div>
    )
};

export default ConnectPeopleSection;