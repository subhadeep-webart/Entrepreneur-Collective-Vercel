import ButtonGroup from "./ButtonGroup";


const LeftContainer = () => {
    return (
        <div className="flex justify-start items-center !pt-8 lg:py-0 lg:items-center h-full">
            <div className="flex flex-col justify-center">
                <h1 className="font-normal text-xs lg:text-lg text-almost-black !mb-3.5">
                    Welcome to Entrepreneur Collective
                </h1>

                <div className="text-base lg:text-4xl font-semibold lg:font-bold text-almost-black !mb-3 lg:!mb-5">
                    <h2>Discover Opportunities.</h2>
                    <h3>Build Connections.</h3>
                    <h4>Advance Your Career.</h4>
                </div>

                <div className="font-normal text-xs lg:text-lg text-almost-black !mb-4 lg:!mb-11">
                    <h4>Join a Network of Professionals.</h4>
                    <h4>Where Careers and Companies Meet the Future.</h4>
                </div>

                <div className="flex gap-3 lg:gap-7">
                    <ButtonGroup />
                </div>
            </div>
        </div>
    )
}

export default LeftContainer;