import GroupMemberCard from "@/components/Feed/GroupMemberCard";

const MainProfileDetailsContainer = () => {
    return (
        <div className="grid grid-cols-12 gap-7">
            <div className="w-full col-span-8">

            </div>
            <div className="col-span-4">
                <div className="flex flex-col gap-7">
                    <GroupMemberCard />
                </div>
            </div>
        </div>
    )
}

export default MainProfileDetailsContainer;