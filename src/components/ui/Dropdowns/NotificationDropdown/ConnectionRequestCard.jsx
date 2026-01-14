import ConnectionButtonContainer from "@/components/UserProfile/ConnectionButtonContainer";
import { Avatar } from "@heroui/react";
import ConnectionCardButtonGroup from "./ConnectionCardButtonGroup";

const ConnectionRequestCard = () => {
    return (
        <div className="w-full flex flex-col gap-4 !px-4">
            <p className="text-ash-charcoal text-base font-semibold">Christopher Washington sent you a request</p>
            <div className="w-full flex gap-4 items-center">
                <div className="w-[20%]">
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform w-[58px] h-[58px]"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-black text-base font-normal">Christopher Washington</h3>
                    <p className="text-medium-gray text-xs font-normal">Sr. Sales Manager</p>
                    <ConnectionCardButtonGroup/>
                </div>
            </div>
        </div>
    )
}

export default ConnectionRequestCard;