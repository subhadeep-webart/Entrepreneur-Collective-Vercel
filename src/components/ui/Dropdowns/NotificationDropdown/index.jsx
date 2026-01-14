"use client"

import { Icons } from "@/assets";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import NotificationCard from "./NotificationCard";
import ConnectionRequestCard from "./ConnectionRequestCard";

const NotificationDropdown = () => {
    return (
        <Dropdown placement="bottom-end" classNames={{
            content: "!rounded-none"
        }}>
            <DropdownTrigger className="cursor-pointer">
                <Icons.Bell />
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Notification Icons"
                variant="flat"
                closeOnSelect={false}
            >
                <DropdownItem
                    classNames={{
                        base: `!py-4 !rounded-none !px-2`,
                    }}
                >
                    <NotificationCard />
                </DropdownItem>
                <DropdownItem classNames={{
                    base: `!py-4 !rounded-none !px-2`,
                }}>
                    <ConnectionRequestCard />
                </DropdownItem>
                <DropdownItem
                    classNames={{
                        base: `!py-4 !rounded-none !px-2`,
                    }}
                >
                    <NotificationCard />
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default NotificationDropdown;