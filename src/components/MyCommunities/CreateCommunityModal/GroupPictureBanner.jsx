import { Icons } from "@/assets";
import { Avatar } from "@heroui/react";

const GroupPictureBanner = () => {
    return (
        <div className="w-full h-[360px] flex justify-center items-center bg-very-light-gray relative">
            <Icons.Image className="text-[#B4B4B4]" size={120} />
            <Avatar
                color="default"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                className="w-36 h-36 absolute -bottom-15 left-10 border-transparent border-8 outline-none shadow-none"
            />
        </div>
    )
}

export default GroupPictureBanner;