import { Icons } from "@/assets";
import FindExpertModal from "@/components/ui/Modals/component/FindExpertModal";

const IconGroup = () => {
  return (
    <div className="w-fit flex gap-2">
      <Icons.Smile size={18} />
      <Icons.Paperclip size={18} />
      {/* <Icons.SendHorizonal size={18} /> */}
      <Icons.Image size={18} />
      <FindExpertModal />
    </div>
  );
};

export default IconGroup;
