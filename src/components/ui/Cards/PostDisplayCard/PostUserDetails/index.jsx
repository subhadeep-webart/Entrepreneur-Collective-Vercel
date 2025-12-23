"use client"
import { Avatar } from "@heroui/react"
import PostUserNameStatus from "./PostUserNameStatus"
import PostDescription from "./PostDescription"

const PostUserDetails = () => {
    return (
        <div className="flex gap-4 justify-start items-start">
            <div className="w-14 h-14">
                <Avatar className="w-14 h-14" isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            </div>
            <div className="flex flex-col gap-1">
                <PostUserNameStatus userName="Subhadeep Das"/>
                <PostDescription />
            </div>
        </div>
    )
}

export default PostUserDetails