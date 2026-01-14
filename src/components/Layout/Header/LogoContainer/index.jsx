import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const LogoContainer = () => {
    return (
        <Link href={"/"} className="max-w-36 lg:max-h-7 lg:max-w-52 w-full lg:max-h-9 h-full relative">
            <Image src={PUBLIC_IMAGES.Logo} alt="Website Logo" fill className="w-full h-full object-contain" />
        </Link>
    )
}

export default LogoContainer;