import Image from "next/image";
import ExpertiseCard from "../ExpertiseCard";
import ExpertiseDetails from "../ExpertiseCard/ExpertiseDetails";
import { PUBLIC_IMAGES } from "@/assets";

const ExpertiseCardContainer = () => {
    return (
        <div className="grid grid-cols-2 gap-7 container">
            <ExpertiseCard>
                <div className="w-full max-h-72 h-72 relative">
                    <Image src={PUBLIC_IMAGES.post1} alt="post1" className="h-full w-full object-cover" fill />
                </div>
                <ExpertiseDetails headerText="Connect with people who can help" subText="Phasellus vitae risus egestas, varius tellus at, dignissim lectus. Maecenas ac mi vitae metus rhoncus molestie eu sodales ex.Maecenas nec quam felis. Nulla faucibus facilisis massa" buttonText="Find people" href="#"/>
            </ExpertiseCard>
            <ExpertiseCard>
                <ExpertiseDetails headerText="Freelancers / Solo Service Providers" subText="Phasellus vitae risus egestas, varius tellus at, dignissim lectus. Maecenas ac mi vitae metus rhoncus molestie eu sodales ex." buttonText="Find experts" href="#" />
                <div className="w-full max-h-72 h-72 relative">
                    <Image src={PUBLIC_IMAGES.post1} alt="post1" className="h-full w-full object-cover" fill />
                </div>
            </ExpertiseCard>
        </div>
    )
}

export default ExpertiseCardContainer;