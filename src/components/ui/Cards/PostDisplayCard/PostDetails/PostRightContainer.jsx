import PostDescription from "./PostDescription";
import PostMedia from "./PostMedia";
import PostMetric from "./PostMetric";
import PostUserNameStatus from "./PostUserNameStatus";

const PostRightContainer = () => {
    return (
        <div className="w-full flex flex-col gap-7">
            <PostUserNameStatus />
            <PostDescription />
            <PostMedia />
            <PostMetric />
        </div>
    )
}

export default PostRightContainer;