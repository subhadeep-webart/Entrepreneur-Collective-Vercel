
import Image from "next/image";

const BrandsCard = ({ image }) => {
  return (
    <div className="w-full border border-neutral-gray bg-white h-[157px] flex justify-center items-center !px-1.5 col-span-12 lg:col-span-3">
      <div className="w-full max-w-[280px] min-h-[80px] h-[80px] lg:h-[110px] relative">
        <Image
          src={image}
          alt="home"
          fill
          className=" object-contain"
          unoptimized
        />
      </div>
    </div>
  )
};

export default BrandsCard;