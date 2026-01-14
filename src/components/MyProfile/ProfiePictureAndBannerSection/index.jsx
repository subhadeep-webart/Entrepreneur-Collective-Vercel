"use client";
import { Icons } from "@/assets";
import { Avatar } from "@heroui/react";
import CoverPhotoUpdateModal from "./CoverPhotoUpdateModal";

const ProfilePictureAndBannerSection = ({ isEditable = false }) => {
  return (
    <div className="w-full h-[444px] flex justify-center items-center bg-very-light-gray relative">
      <Icons.Image className="text-[#B4B4B4]" size={120} />
      <Avatar
        color="default"
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        className="w-48 h-48 absolute -bottom-20 left-30 border-transparent border-8 outline-none shadow-none"
      />
      {isEditable && <CoverPhotoUpdateModal />}
    </div>
  );
};

export default ProfilePictureAndBannerSection;
