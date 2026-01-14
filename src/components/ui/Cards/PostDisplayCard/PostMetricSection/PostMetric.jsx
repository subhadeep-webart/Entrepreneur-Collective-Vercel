import { Divider } from "@heroui/react";
import PostEngagement from "../PostEngagement";
import PostReaction from "../PostReaction";

const PostMetric=()=>{  
    return(
        <div className="w-full flex flex-col justify-between items-start gap-4"> 
            <PostEngagement/>
            <Divider className="my-2"/>
            <PostReaction/>
        </div>
    )
}

export default PostMetric;