import { PUBLIC_IMAGES } from "@/assets";
import BrandsCard from "./BrandsCard";

const BrandsSection = () => {
    return (
        <div className="container !mb-16 flex flex-col gap-6 lg:gap-14">
            <h4 className="font-bold text-xl text-almost-black">Brands we work with</h4>
            <div className="grid grid-cols-12 gap-3 lg:gap-7">
                <BrandsCard image={PUBLIC_IMAGES.Microsoft} />
                <BrandsCard image={PUBLIC_IMAGES.Accenture} />
                <BrandsCard image={PUBLIC_IMAGES.Wipro} />
                <BrandsCard image={PUBLIC_IMAGES.Deloitte} />
            </div>
        </div>
    )
};

export default BrandsSection;