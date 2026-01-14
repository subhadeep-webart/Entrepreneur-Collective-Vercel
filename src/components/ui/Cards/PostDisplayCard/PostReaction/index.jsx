import { Icons } from "@/assets";
import ReactionButton from "@/components/shared/Buttons/ReactionButton";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { Divider } from "@heroui/react";

const REACTIONS = [
  { id: "like", label: "Like", icon: Icons.ThumbsUp },
  //   { id: "love", label: "Love", icon: Icons.Heart },
  //   { id: "haha", label: "Haha", icon: Icons.Smile },
  //   { id: "wow", label: "Wow", icon: Icons.Eye },
  //   { id: "sad", label: "Sad", icon: Icons.Sad },
  //   { id: "angry", label: "Angry", icon: Icons.Angry },
];

const PostReaction = () => {
  return (
    <div className="flex h-5 items-center space-x-4 text-small w-full gap-2">
      <div className="w-full">
        <ReactionButton />
      </div>
      <Divider orientation="vertical" />
      <div className="w-full flex justify-center items-center">
        <CustomButton className="bg-transparent w-40">
          <Icons.MessageCircle size={18} className="text-form-text" />
          <span className="inline-block ml-2 text-soft-black text-base font-normal">
            Comment
          </span>
        </CustomButton>
      </div>
      <Divider orientation="vertical" />
      <div className="w-full flex justify-end">
        <CustomButton className="bg-transparent w-20">
          <Icons.Share2 size={18} className="text-form-text" />
          <span className="inline-block ml-2 text-soft-black text-base font-normal">
            Share
          </span>
        </CustomButton>
      </div>
    </div>
  );
};

export default PostReaction;
