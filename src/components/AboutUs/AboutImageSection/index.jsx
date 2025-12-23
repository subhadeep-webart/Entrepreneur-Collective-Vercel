import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const AboutImageSection = () => {
    return (
        <div className="w-full grid grid-cols-12 gap-7 container h-96">
            <div className="col-span-5 w-full relative">
                <Image src={PUBLIC_IMAGES?.HomeAboutImg} className="w-full h-full object-cover" fill alt="About Image" />
            </div>
            <div className="col-span-7 w-full relative">
                <Image src={PUBLIC_IMAGES?.HomeAboutImg} className="w-full h-full object-cover" fill alt="About Image 1" />
            </div>
        </div>
    )
}

export default AboutImageSection;