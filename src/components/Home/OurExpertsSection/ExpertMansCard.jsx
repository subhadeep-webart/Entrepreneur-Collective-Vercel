import Image from "next/image";

const ExpertMansCard = ({ image,name ,position,experience}) => {
  return (
    <div className=" flex gap-3">
      <div className="w-[50px] h-[50px] relative">
        <Image
          src={image}
          alt="home"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
      <div>
        <h4 className="font-semibold text-sm text-foreground">
          {name}
        </h4>
        <span className="font-normal text-sm text-medium-gray">
          {position}
        </span>
        <p className="font-normal text-sm text-medium-gray">
          Experience:{experience}
        </p>
      </div>
    </div>
  );
};

export default ExpertMansCard;
