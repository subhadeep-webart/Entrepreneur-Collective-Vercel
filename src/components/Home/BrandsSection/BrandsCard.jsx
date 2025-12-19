
import Image from "next/image";

const BrandsCard=({image})=>{
    return(
        <div className="max-w-[309px] w-full border border-neutral-gray bg-white h-[157px] !px-1.5 !py-4">
 <div className="w-[280px] h-[110px] relative">
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