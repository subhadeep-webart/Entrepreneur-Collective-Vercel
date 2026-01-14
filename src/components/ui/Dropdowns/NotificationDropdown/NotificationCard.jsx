import { Icons } from "@/assets"
import { Avatar, Button } from "@heroui/react"
import NotificationActionDropdown from "./NotificationActionDropdown"

const NotificationCard = () => {
    return (
        <div className="w-full flex justify-between items-center !px-4">
            <div className="w-[20%]">
                <Avatar
                    as="button"
                    className="transition-transform w-[58px] h-[58px]"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-ash-charcoal text-base font-semibold">Professional Networking Group</h3>
                <p className="text-[#818181] text-sm font-normal">Vestibulum feugiat a magna et dictum.</p>
            </div>
            <div className="w-fit">
                <NotificationActionDropdown />
            </div>
        </div>
    )
}

export default NotificationCard