
import Image from "next/image";

const ToolsCard = ({ image, title }) => {
  return (
    <div className="flex gap-3 items-center max-w-[143px] w-full">
      <div className="w-[52px] h-[52px] relative">
        <Image
          src={image}
          alt="home"
          fill
          className=" object-contain"
          unoptimized
        />
      </div>
      <h4 className="font-normal text-base text-foreground">{title}</h4>
    </div>
  );
};

export default ToolsCard;
