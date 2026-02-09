const { PUBLIC_IMAGES } = require("@/assets");
const { default: ExpertMansCard } = require("./ExpertMansCard");

const ExpertMansSection = () => {
  return (
    <div className="max-w-[533px] w-full max-h-[319px] !ml-6 !mt-24">
      <div className="flex justify-between">
        <ExpertMansCard
          image={PUBLIC_IMAGES.Man1}
          name="Jonathan Emmanuel"
          position="Sr. sales manager"
          experience=" 7 years"
        />
        <ExpertMansCard
          image={PUBLIC_IMAGES.Man2}
          name="Sarah Chen"
          position="Fractional CTO"
          experience=" 12 years"
        />
      </div>
      <div className="!py-8">
        <div className="border border-light-gray border-dashed"></div>
      </div>

      <div className="flex justify-between">
        <ExpertMansCard
          image={PUBLIC_IMAGES.Man1}
          name="Marcus Thorne"
          position="Marketing Strategist"
          experience=" 9 years"
        />
        <ExpertMansCard
          image={PUBLIC_IMAGES.Man2}
          name="Elena Rodriguez"
          position="Operations Consultant"
          experience=" 10 years"
        />
      </div>
      {/* <div className="!py-8">
            <div className="border border-light-gray border-dashed"></div>
          </div>

            <div className="flex justify-between">
            <ExpertMansCard image={PUBLIC_IMAGES.Man1} name="Jonathan Emmanuel" position="Sr. sales manager" experience=" 7 years"/>
            <ExpertMansCard image={PUBLIC_IMAGES.Man2} name="Jonathan Emmanuel" position="Sr. sales manager" experience=" 7 years"/>
          </div> */}
    </div>
  );
};
export default ExpertMansSection;
