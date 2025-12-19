"use client"

import { Avatar } from "@heroui/react";
import PostRightContainer from "./PostRightContainer";

const PostDetails = () => {
    return (
        <div className="flex gap-4 justify-start items-start">
            <Avatar className="w-14 h-14" isBordered  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
            <PostRightContainer />
        </div>
    )
}

export default PostDetails;