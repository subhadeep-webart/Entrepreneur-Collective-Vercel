import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="flex gap-7">
      <div className="relative w-[311px] h-[374px]">
        <Image
          src={PUBLIC_IMAGES.ResourceDetailImg2}
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-7">
        <div className="relative w-[310px] h-[177px]">
          <Image
            src={PUBLIC_IMAGES.ResourceDetailImg2}
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-[310px] h-[177px]">
          <Image
            src={PUBLIC_IMAGES.ResourceDetailImg2}
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative w-[311px] h-[374px]">
        <Image
          src={PUBLIC_IMAGES.ResourceDetailImg2}
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ImageSection;
