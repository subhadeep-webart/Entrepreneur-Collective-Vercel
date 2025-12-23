
import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const FaceCard = ({description}) => {
  return (
    <div className="flex items-center gap-2 !my-5">
      <div className="relative w-[34px] h-[34px] border-2 border-dim-gray rounded-full">
        <Image
          src={PUBLIC_IMAGES.ResourceFace}
          alt=" "
          fill
          className="object-cover"
        />
      </div>
      <div>
      <h4 className="font-bold text-xs text-foreground">Jhone Doe</h4>
      <p className="font-normal text-xs text-granite-gray">{description}</p>
      </div>
    </div>
  );
};

export default FaceCard;
