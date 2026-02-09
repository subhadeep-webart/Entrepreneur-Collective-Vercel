"use client";
import { Avatar, cn } from "@heroui/react";

const ChooseUsCard = ({
  image,
  description,
  name,

  wrapperClass,
  avatarClass,
  descriptionClass,
  nameClass,
}) => {
  return (
    <div
      className={cn(
        "bg-white max-w-96 w-96 h-[250px] flex flex-col gap-4 justify-center items-center !py-12 !px-6",
        wrapperClass
      )}
    >
      <Avatar
        src={image}
        className={cn("w-20 h-20 text-large", avatarClass)}
      />

      <p
        className={cn(
          "text-sm font-medium text-light-charcoal text-center",
          descriptionClass
        )}
      >
        {description}
      </p>

      <span
        className={cn(
          "text-base font-bold text-light-charcoal",
          nameClass
        )}
      >
        {name}
      </span>
    </div>
  );
};

export default ChooseUsCard;
