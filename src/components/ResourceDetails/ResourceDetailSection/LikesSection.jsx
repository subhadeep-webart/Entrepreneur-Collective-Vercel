import { Icons, PUBLIC_IMAGES } from "@/assets";
import IconCard from "@/components/shared/Cards/IconCard";
import Image from "next/image";

const LikesSection = () => {
  return (
    <div className="flex items-center gap-1.5 ">
      <div className="relative w-[30px] h-[30px] border-2 border-dim-gray rounded-full">
        <Image
          src={PUBLIC_IMAGES.ResourceFace}
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex items-center gap-16">

      <IconCard icon={Icons.Heart} value="12K" color="#DF0000" fill="#DF0000" size={14}/>
      <IconCard
        icon={Icons.MessageCircle}
        value="500"
        color="#000000"
        size={14}
      />

      <IconCard icon={Icons.Share2} value="120" color="#000000" size={14} />
      <IconCard icon={Icons.Calendar} value="07.04.2025" color="#000000" size={14} />
    </div>
    </div>
  );
};

export default LikesSection;
