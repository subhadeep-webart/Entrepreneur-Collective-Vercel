import RefundPolicyList from "./RefundPolicyList";

const TicketSection = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <div className="flex justify-between !mb-7">
          <h5 className="font-semibold text-base text-gunmetal-gray">
            Ticket Types
          </h5>
          <p className="font-semibold text-base text-gunmetal-gray">Paid</p>
        </div>
        <div className="w-full border border-neutral-gray bg-white !p-8">
          <h5 className="text-xl font-semibold text-foreground">
            General Access
          </h5>
          <div className="flex justify-between items-center">
            <span className="font-normal text-2xl text-gunmetal-gray">
              $120:00
            </span>

            <ul className=" text-xs font-normal text-graphite-gray">
              <li>100 seats</li>
              <li>Live workshop + Recording</li>
              <li>for 7 days</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
         <span className="font-semibold text-base text-gunmetal-gray">Refund Policy</span>
         <RefundPolicyList/>
      </div>
    </div>
  );
};

export default TicketSection;
