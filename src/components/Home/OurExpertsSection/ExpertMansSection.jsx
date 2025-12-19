const { PUBLIC_IMAGES } = require("@/assets");
const { default: ExpertMansCard } = require("./ExpertMansCard");

const ExpertMansSection=()=>{
    return(
 <div className="max-w-[533px] w-full max-h-[319px] !ml-6 !mt-24">
          <div className="flex justify-between">
            <ExpertMansCard image={PUBLIC_IMAGES.Man1} />
            <ExpertMansCard image={PUBLIC_IMAGES.Man2} />
          </div>
          <div className="!py-8">
            <div className="border border-light-gray border-dashed"></div>
          </div>

            <div className="flex justify-between">
            <ExpertMansCard image={PUBLIC_IMAGES.Man1} />
            <ExpertMansCard image={PUBLIC_IMAGES.Man2} />
          </div>
          <div className="!py-8">
            <div className="border border-light-gray border-dashed"></div>
          </div>

            <div className="flex justify-between">
            <ExpertMansCard image={PUBLIC_IMAGES.Man1} />
            <ExpertMansCard image={PUBLIC_IMAGES.Man2} />
          </div>
         
        </div>
    )
};
export default ExpertMansSection;

