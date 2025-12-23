import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const VideoCard = () => {
  return (
    <div className="relative max-w-[309px] w-full h-[416px] overflow-hidden">
      {/* Background (image or video) */}
      <div className="w-full h-full">
        <img
          src={PUBLIC_IMAGES.VideoImg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Or video */}
        {/* <video src="/path/to/video.mp4" autoPlay loop muted className="w-full h-full object-cover" /> */}
      </div>


      <div className="absolute inset-0 bg-[#13111C78] " />


      <div className="absolute top-4 left-5 w-10 h-10 rounded-full overflow-hidden z-10">
        <Image
          src={PUBLIC_IMAGES.ResourceFace}
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>

  
      <div className="absolute bottom-6 left-5 text-white z-10">
        <p className="font-semibold text-xs">Emily Clark</p>
        <span className="font-normal text-xs">
          Software Developer / Software Engineer
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
