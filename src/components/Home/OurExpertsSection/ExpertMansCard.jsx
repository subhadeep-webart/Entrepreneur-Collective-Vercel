
import Image from "next/image";

const ExpertMansCard = ({ image }) => {
    return (
        <div className=" flex gap-3">
            <div className="w-[36px] h-[36px] lg:w-[50px] lg:h-[50px] relative">
                <Image
                    src={image}
                    alt="home"
                    fill
                    className=" object-contain"
                    unoptimized
                />
            </div>
            <div>
                <h4 className="font-semibold text-xs lg:text-sm text-foreground">Jonathan Emmanuel</h4>
                <span className="font-normal text-xs lg:text-sm text-medium-gray">Sr. sales manager</span>
                <p className="font-normal text-xs lg:text-sm text-medium-gray">Experience: 7 years</p>
            </div>
        </div>
    )
};

export default ExpertMansCard;