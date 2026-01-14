
import Image from "next/image";

const ToolsCard = ({ image, title }) => {
  return (
    <div className="flex gap-3 items-center max-w-[143px] w-full">
      <div className="w-[30px] h-[30px] lg:w-[52px] lg:h-[52px] relative">
        <Image
          src={image}
          alt="home"
          fill
          className=" object-contain"
          unoptimized
        />
      </div>
      <h4 className="font-normal text-xs lg:text-base text-foreground w-full text-wrap line-clamp-1 lg:line-clamp-2">{title}</h4>
    </div>
  );
};

export default ToolsCard;
