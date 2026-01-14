const { Icons } = require("@/assets");

const RefundPolicyList = () => {
  return (
    <ul className="grid grid-cols-1 gap-8">
      <li className="flex items-start gap-3">
        <Icons.CircleCheck fill="#35855F" color="#fff" />
        <span className="text-base font-normal text-graphite-gray">
          100% refund up to 48 hours before the event
        </span>
      </li>
      <li className="flex items-start gap-3">
        <Icons.CircleCheck fill="#35855F" color="#fff" />
        <span className="text-base font-normal text-graphite-gray">
          No refunds after Zoom link is issued
        </span>
      </li>
    </ul>
  );
};

export default RefundPolicyList;
