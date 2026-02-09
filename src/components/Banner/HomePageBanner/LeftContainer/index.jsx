import ButtonGroup from "./ButtonGroup";


const LeftContainer = () => {
    return (
        <div className="flex justify-start items-center h-full ">
            <div className="flex flex-col justify-center">
                <h1 className="font-normal text-lg text-almost-black !mb-3.5">
                    Welcome to Entrepreneur Collective
                </h1>

                <div className="text-4xl font-bold text-almost-black !mb-5">
                    <h2>Discover Opportunities.</h2>
                    <h3>Build Connections.</h3>
                    <h4>Advance Your Career.</h4>
                </div>

                <div className="font-normal text-lg text-almost-black !mb-11">
                    <h4>Join a Network of Professionals.</h4>
                    <h4>Where Careers and Companies Meet the Future.</h4>
                </div>

                <div className="flex gap-7">
                    <ButtonGroup />
                </div>
            </div>
        </div>
    )
}

export default LeftContainer;