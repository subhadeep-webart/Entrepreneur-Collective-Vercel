import ReactionButton from "@/components/shared/Buttons/ReactionButton";
import { Divider } from "@heroui/react";

const PostReaction = () => {
    return (
        <div className="flex h-5 items-center space-x-4 text-small">
            <div><ReactionButton/></div>
            <Divider orientation="vertical" />
            <div>Docs</div>
            <Divider orientation="vertical" />
            <div>Source</div>
        </div>
    )
}

export default PostReaction;