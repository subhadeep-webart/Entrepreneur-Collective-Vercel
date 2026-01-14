import AddAwardCard from "./AddAwardCard";

const AwardsAndRecognisationSection = () => {
    return (
        <div className="w-full border-1 border-dashed border-balanced-gray !px-9 !py-10">
            <div className="flex flex-col gap-2">
                <h3 className="text-base text-almost-black font-semibold">Awards and recognitions</h3>
                <p className="text-base text-cool-shadow-gray font-medium">Celebrating our achievements and milestones in innovation, technology, and service excellence.</p>
            </div>
            <div className="grid grid-cols-4 gap-7">
                <AddAwardCard />
                <AddAwardCard />
                <AddAwardCard />
                <AddAwardCard />
            </div>
        </div>
    )
}

export default AwardsAndRecognisationSection;