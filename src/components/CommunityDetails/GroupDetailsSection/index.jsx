"use client";
import { Icons } from "@/assets";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import CardComponent from "@/components/ui/Cards/CardComponent";
import { Avatar, AvatarGroup } from "@heroui/react";

const GroupDetailsSection = () => {
  return (
    <CardComponent className={"max-h-[100dvh]"}>
      <CardComponent.Header className={"flex flex-col"}>
        <h3 className="text-black text-xl font-semibold">Design1990</h3>
        <p className="font-normal text-base text-variant-gray">
          IT services and it consulting
        </p>
      </CardComponent.Header>
      <CardComponent.Body className={"!space-y-8"}>
        <AvatarGroup
          isBordered
          max={3}
          renderCount={(count) => (
            <p className="text-sm text-coral-red font-medium !ml-2">
              {count} Employees
            </p>
          )}
          total={50}
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
        <div className="flex gap-2">
          <Icons.MapPin />
          <p className="font-normal text-base text-variant-gray">
            742 Evergreen Terrace, Springfield, IL 62704, USA
          </p>
        </div>
        <div>
          <h3 className="text-almost-black text-lg font-semibold">
            Description
          </h3>
          <p className="font-normal text-base text-medium-gray">
            Nam eu pellentesque ipsum, non posuere dui. Integer eu lectus quis
            ex maximus bibendum. Phasellus condimentum velit ac bibendum
            tincidunt. Vestibulum quis arcu quis quam facilisis tempor in nec
            lorem. Duis sagittis lacus eu mi facilisis, non egestas metus
            hendrerit. Praesent mollis id arcu ut bibendum. Fusce cursus euismod
            sodales. Ut vel tellus id purus.
          </p>
        </div>
        <div>
          <h3 className="text-almost-black text-lg font-semibold">Rules </h3>
          <p className="font-normal text-base text-medium-gray">
            Be Professional & Respectful, Relevant Content Only, No Spam or
            Self-Promo Flooding
          </p>
        </div>
      </CardComponent.Body>
      <CardComponent.Footer className="flex items-center justify-center gap-2 ">
        <LinkButton className="text-sm w-48 h-12" href={"#"}>
          Edit group
        </LinkButton>
        <LinkButton
          className="text-sm w-48 h-12 bg-transparent border border-black"
          href={"#"}
        >
          Delete group
        </LinkButton>
      </CardComponent.Footer>
    </CardComponent>
  );
};

export default GroupDetailsSection;
