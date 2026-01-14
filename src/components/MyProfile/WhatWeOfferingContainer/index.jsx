import AddYourServiceCard from "../AddYourServiceCard";

const WhatWeOfferingContainer = () => {
    return (
        <div className="w-full flex flex-col gap-4">
            <h3 className="text-almost-black text-lg font-semibold">What we offering</h3>
            <div className="w-full grid grid-cols-4 gap-7">
                <AddYourServiceCard />
                <AddYourServiceCard />
                <AddYourServiceCard />
                <AddYourServiceCard />
            </div>
        </div>
    )
}

export default WhatWeOfferingContainer;