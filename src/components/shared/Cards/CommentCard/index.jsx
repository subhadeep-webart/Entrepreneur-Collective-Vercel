import { Icons } from "@/assets";
import FaceCard from "../FaceCard";


const CommentCard = () => {
  return (
    <div className="max-w-[309px]  bg-white !p-8 border border-neutral-gray">
      <Icons.CommaIcon size={30} />
      <h5 className="font-normal text-sm !pt-5">
        Donec lacinia fringilla libero ut finibus. Vestibulum eu risus aliquam
        euismod purus Fusce scelerisque nibh. Sit amet quam.
      </h5>
      <FaceCard description="UI/UX Designer" />
    </div>
  );
};

export default CommentCard;
