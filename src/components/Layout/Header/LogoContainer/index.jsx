import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const LogoContainer=()=>{
    return(
        <div className="max-w-52 w-full max-h-9 h-full relative">
            <Image src={PUBLIC_IMAGES.Logo} alt="Website Logo" fill className="w-full h-full object-contain"/>
        </div>
    )
}

export default LogoContainer;