import AreaPlaceHolder from "./AreaPlaceHolder";
import IconGroup from "./IconGroup";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const PostTextArea = () => {
    return (
        <div className="w-full border-1 border-silver-gray display flex justify-between py-7 px-5">
            <LeftContainer />
            <RightContainer />
        </div>
    )
}

export default PostTextArea;