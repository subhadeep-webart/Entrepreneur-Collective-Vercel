import CardComponent from "@/components/ui/Cards/CardComponent"
import AboutDetails from "./AboutDetails"
import Image from "next/image"
import { PUBLIC_IMAGES } from "@/assets"

const AboutCard=()=>{
    return(
        <CardComponent>
            <CardComponent.Header>
                <AboutDetails/>
            </CardComponent.Header>
            <CardComponent.Body>
                <div className="w-full h-64 relative">
                    <Image src={PUBLIC_IMAGES.HomeAboutImg} alt="Home About Image" fill className="w-full h-full object-cover"/>
                </div>
            </CardComponent.Body>
        </CardComponent>
    )
}

export default AboutCard