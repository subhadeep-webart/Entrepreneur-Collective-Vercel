import Agenda from "./Agenda";
import WorkshopAllDetails from "./WorkshopAllDetails";

const WorkshopDetailsSection = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8">
        <WorkshopAllDetails />
      </div>
      <div className="col-span-4">
        <Agenda />
      </div>
    </div>
  );
};

export default WorkshopDetailsSection;
