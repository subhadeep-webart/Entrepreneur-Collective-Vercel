"use client"

import { Icons } from "@/assets";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import NotificationCard from "./NotificationCard";
import CustomButton from "../../Buttons/CustomButton";

const NotificationActionDropdown = () => {
    return (
        <Dropdown placement="center" classNames={{
            content: "!rounded-none !bg-transparent !shadow-none !w-fit"
        }}>
            <DropdownTrigger className="cursor-pointer">
                <Button isIconOnly className="bg-transparent">
                    <Icons.CircleEllipsis className="text-primary" size={18} />
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Notification Icons"
                variant="flat"
                closeOnSelect={false}
                className="!bg-transparent"
            >
                <DropdownItem
                    classNames={{
                        base: `!rounded-none !bg-transparent`,
                    }}
                >
                    <CustomButton className="w-32 bg-transparent text-black border-1 border-black">
                        Remove
                    </CustomButton>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default NotificationActionDropdown;