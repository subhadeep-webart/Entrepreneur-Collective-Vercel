import EnquiryDetailsCard from "../EnquiryDetailsCard";
import EnquiryDetailsPart from "../EnquiryDetailsPart";

const EnquiryDetailsContainer = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-9">
        <div className="grid grid-cols-3 gap-4">
          <EnquiryDetailsCard />
          <EnquiryDetailsCard />
          <EnquiryDetailsCard />
          <EnquiryDetailsCard />
          <EnquiryDetailsCard />
          <EnquiryDetailsCard />
          <EnquiryDetailsCard />
          <EnquiryDetailsCard />
          <EnquiryDetailsCard />
        </div>
      </div>
      <div className="col-span-3">
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-2xl text-black">Enquiry Details</h4>
          <EnquiryDetailsPart />
        </div>
      </div>
    </div>
  );
};

export default EnquiryDetailsContainer;
