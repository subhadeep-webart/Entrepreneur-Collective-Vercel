import AreaPlaceHolder from "../AreaPlaceHolder";
import IconGroup from "../IconGroup";

const RightContainer=()=>{
    return(
        <div className="w-full flex items-center justify-between border-1 border-silver-gray !px-3.5 py-4">
            <AreaPlaceHolder/>
            <IconGroup/>
        </div>
    )
}

export default RightContainer;