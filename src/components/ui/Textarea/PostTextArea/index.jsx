import CardComponent from "../../Cards/CardComponent";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const PostTextArea = () => {
    return (
        <CardComponent>
            <CardComponent.Body className={"flex gap-3.5"}>
                <LeftContainer />
                <RightContainer />
            </CardComponent.Body>
        </CardComponent>
    )
}

export default PostTextArea;