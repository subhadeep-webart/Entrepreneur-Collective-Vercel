"use client";
import { Icons } from "@/assets";
import CoverPhotoUpdateModal from "./CoverPhotoUpdateModal";
import ProfilePictureUpdateModal from "./ProfilePictureUpdateModal";

const ProfilePictureAndBannerSection = ({ isEditable = false }) => {
  return (
    <div className="w-full h-[444px] flex justify-center items-center bg-very-light-gray relative">
      <Icons.Image className="text-[#B4B4B4]" size={120} />
      <ProfilePictureUpdateModal/>
      {isEditable && <CoverPhotoUpdateModal />}
    </div>
  );
};

export default ProfilePictureAndBannerSection;
