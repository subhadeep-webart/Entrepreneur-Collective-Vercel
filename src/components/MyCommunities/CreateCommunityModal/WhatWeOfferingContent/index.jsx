import AddYourServiceCard from "@/components/MyProfile/AddYourServiceCard";
import AddYourServiceModal from "@/components/MyProfile/AddYourServiceCard/AddYourServiceModal";
import AddMoreService from "./AddMoreService";

const WhatWeOfferingContent = () => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between">
                <h3 className="text-almost-black text-lg font-semibold">What we offering</h3>
                <AddMoreService/>
            </div>
            <div className="w-full grid grid-cols-4 gap-7">
                <AddYourServiceCard />
                <AddYourServiceCard />
                <AddYourServiceCard />
                <AddYourServiceCard />
            </div>
        </div>
    )
}

export default WhatWeOfferingContent;