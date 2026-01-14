"use client"

import { Icons } from "@/assets";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import AuthButtonGroup from "../Header/AuthButtonGroup";
import Link from "next/link";
import { HEADER_MENU } from "@/contants/layout_constant";

const NavBarHamburgerMenu = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className="w-fit lg:hidden">
            <Button onPress={onOpen} className="bg-transparent" isIconOnly>
                <Icons.Menu size={20} className="text-[#292929]" />
            </Button>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} className="bg-white !px-4 !py-2 !rounded-none" hideCloseButton size="sm">
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex justify-between items-center gap-1">
                                <h3>Menu</h3>
                                <button className="cursor-pointer" onClick={onClose}>
                                    <Icons.CircleX size={20} className="text-[#292929]" />
                                </button>
                            </DrawerHeader>
                            <DrawerBody className="w-full flex justify-start items-center !py-4">
                                <ul className="w-full">
                                    {
                                        HEADER_MENU?.map((menu, index) => (
                                            <li
                                                key={`nav-menu-${index + 1}`}
                                                className="!py-4 border-b border-dashed border-[#D8D8D8] last:border-b-0 !px-2"
                                            >
                                                <Link href={menu.href}>{menu.name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </DrawerBody>
                            <DrawerFooter className="w-full justify-start">
                                <AuthButtonGroup />
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default NavBarHamburgerMenu;