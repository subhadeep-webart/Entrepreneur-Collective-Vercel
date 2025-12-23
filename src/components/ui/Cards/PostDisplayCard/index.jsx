import CardComponent from "../CardComponent";
import PostMedia from "./PostMedia";
import PostMetricSection from "./PostMetricSection";
import PostUserDetails from "./PostUserDetails";

const PostCardDisplay = () => {
    return (
        <CardComponent>
            <CardComponent.Header className={"flex-col"}>
                <PostUserDetails />
            </CardComponent.Header>
            <CardComponent.Body>
                <PostMedia />
            </CardComponent.Body>
            <CardComponent.Footer>
                <PostMetricSection/>
            </CardComponent.Footer>
        </CardComponent>
    )
}

export default PostCardDisplay;