"use client";

import CardComponent from "@/components/ui/Cards/CardComponent";
import { Avatar, AvatarGroup } from "@heroui/react";
import JoinGroupButton from "../../Buttons/JoinGroupButton";
import CommunityDetails from "./CommunityDetails";
import Link from "next/link";
import { useUserType } from "@/app/[user_type]/(afterlogin)/UserTypeProvider";
import LeaveGroupModal from "@/components/ui/Modals/component/LeaveGroupModal";

const CommunityCard = () => {
  const userType = useUserType();

  if (!userType) return null;

  return (
    <CardComponent>
      <Link href={`/${userType}/community-details`}>
        <CardComponent.Body className={"flex items-start flex-col gap-4"}>
          <CommunityDetails />
          <AvatarGroup
            isBordered
            max={3}
            renderCount={(count) => (
              <p className="text-sm text-coral-red font-medium !ml-2">
                {count} others
              </p>
            )}
            total={10}
            className="w-full justify-start"
          >
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              className="h-6 w-6"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              className="h-6 w-6"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              className="h-6 w-6"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              className="h-6 w-6"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              className="h-6 w-6"
            />
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              className="h-6 w-6"
            />
          </AvatarGroup>
        </CardComponent.Body>
      </Link>
      <CardComponent.Footer>
        <JoinGroupButton />
        {/* <LeaveGroupModal /> */}
      </CardComponent.Footer>
    </CardComponent>
  );
};

export default CommunityCard;
