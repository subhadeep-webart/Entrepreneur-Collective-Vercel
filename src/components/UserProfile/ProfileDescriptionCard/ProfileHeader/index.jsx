"use client"

import { Avatar, AvatarGroup } from "@heroui/react"

const ProfileHeader = () => {
    return (
        <div className="w-full grid grid-cols-12 gap-2">
            <div className="w-full flex items-start col-span-8">
                <div className="w-full flex flex-col gap-1">
                    <h3 className="text-black font-semibold text-xl">The Founder’s Formula</h3>
                    <span className="inline-block text-variant-gray text-base font-normal">Design agency</span>
                    <span className="inline-block text-variant-gray text-lg font-medium">
                        Empowering the Next Generation of Leaders
                    </span>
                </div>
            </div>
            <div className="py-2 col-span-4 w-full">
                <AvatarGroup
                    isBordered
                    max={3}
                    renderCount={(count) => (
                        <p className="text-xl text-variant-gray font-semibold !ml-2">{count} others</p>
                    )}
                    total={10}
                    className="w-full justify-start"
                >
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="h-6 w-6" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className="h-6 w-6" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className="h-6 w-6" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" className="h-6 w-6" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" className="h-6 w-6" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="h-6 w-6" />
                </AvatarGroup>
            </div>
        </div>
    )
}

export default ProfileHeader