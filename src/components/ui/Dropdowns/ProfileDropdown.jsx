"use client";

import { useUserType } from "@/app/[user_type]/(afterlogin)/UserTypeProvider";
import { PROFILE_DROPDOWN_MENU } from "@/contants/app_contant";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const USER_TYPE_KEY = "userType";

const ProfileDropdown = () => {
  const userType = useUserType();
  const router = useRouter();

  if (!userType) return null;

  const handleSignOut = () => {
    localStorage.removeItem(USER_TYPE_KEY);
    router.push("/");
  };
  
  return (
    <Dropdown
      placement="bottom-end"
      classNames={{
        content: "!rounded-none",
      }}
    >
      <DropdownTrigger className="cursor-pointer">
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        {PROFILE_DROPDOWN_MENU?.map((profileMenu, index) => (
          <DropdownItem
            key={profileMenu.key}
            classNames={{
              base: `!py-4 border-b border-dashed border-[#D8D8D8] !rounded-none !px-2`,
            }}
            href={`/${userType}${profileMenu?.href}`}
          >
            <span style={{ color: profileMenu?.color }}>
              {profileMenu.name}
            </span>
          </DropdownItem>
        ))}

        <DropdownItem
          key="logout"
          color="danger"
          classNames={{
            base: "!py-4 !rounded-none !px-2",
          }}
          // onClick={handleSignOut}
        >
          Sign Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileDropdown;
